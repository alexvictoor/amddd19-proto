import React from "react";
import Grid from '@material-ui/core/Grid';
import getServerUrl from "./configuration";
import SeatsForm from "./SeatsForm";
import SeatsSuggestions from './SeatsSuggestions';
import ShowSelector from './ShowSelector';
import BookingDialog from './BookingDialog';
import Confirmation from './Confirmation';

export interface Suggestion {
  totalPrice: number,
  seats: string[],
  category: string
}

export interface Seat {
  name: string,
  category: number,
  reservationStatus: number,
}
export interface Auditorium {
  rows: { [row: string]: Seat[] },
}

interface BookingAppState {
  loading: boolean,
  currentShow: number | void,
  numberOfSeats: number | void,
  shows: number[],
  suggestions: Suggestion[],
  currentSuggestion: number | void,
  auditorium: { rows: any } | void,
  bookingDialog: boolean
  bookingConfirmed: boolean
}

const initialState: BookingAppState = {
  loading: true,
  shows: [],
  currentShow: undefined,
  auditorium: undefined,
  numberOfSeats: undefined,
  suggestions: [],
  currentSuggestion: undefined,
  bookingDialog: false,
  bookingConfirmed: false
}

const serverUrl = getServerUrl(window.location.href);

function BookingApp() {

  const [state, setState] = React.useState(initialState);

  const selectShow = (showId: number) => {
    fetch(`${serverUrl}/shows/${showId}`)
      .then(resp => resp.json())
      .then(auditorium => {
        setState({
          ...state,
          currentShow: showId,
          auditorium,
          numberOfSeats: undefined,
          suggestions: [],
          currentSuggestion: undefined,
        })
      });
    // http://localhost:4246/api/auditorium-seating/
  }

  const specifyNumberOfSeats = (numberOfSeats: number) => {
    setState({
      ...state,
      numberOfSeats,
    });
  }

  const mapSuggestionsGroups = (category: number | 'Mixed', group: any) => {
    if (!group) {
      return [];
    }
    const categoryLabel = category === 'Mixed' ? 'Mixed' : `Category ${category}`;
    return group.map((s: any) => ({ category: categoryLabel, seats: s.seats, totalPrice: s.totalPrice}))
  }

  const searchSeats = () => {
    fetch(`${serverUrl}/shows/${state.currentShow}/suggestions?&party=${state.numberOfSeats}`)
      .then(resp => resp.json())
      .then(suggestionsGroups => {
        setState({
          ...state,
          currentSuggestion: 0,
          suggestions: [
            ...mapSuggestionsGroups(1, suggestionsGroups['suggestionsForFirstCategory']),
            ...mapSuggestionsGroups(2, suggestionsGroups['suggestionsForSecondCategory']),
            ...mapSuggestionsGroups(3, suggestionsGroups['suggestionsForThirdCategory']),
            ...mapSuggestionsGroups('Mixed', suggestionsGroups['suggestionsForMixedCategory']),
          ]
        })
      });
  }

  const selectSuggestion = (suggestionIndex: number) => {
    setState({
      ...state,
      currentSuggestion: suggestionIndex,
    });
  }

  const openBookDialog = () => {
    setState({
      ...state,
      bookingDialog: true,
    });
  }

  const bookSeats = () => {
    const seats = state.suggestions[state.currentSuggestion || 0].seats;
    fetch(
      `${serverUrl}/shows/${state.currentShow}/reservations`, 
      { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(seats) 
      }
    ).then(_ => {
      setState({
        ...state,
        numberOfSeats: undefined,
        suggestions: [],
        currentSuggestion: undefined, 
        bookingDialog: false,
        bookingConfirmed: true
      });
    });
  }

  const cancelBooking = () => {
    setState({
      ...state,
      bookingDialog: false,
    });
  }

  const closeBookingConfirmation = () => setState({ 
    ...state,
    bookingConfirmed: false 
  });


  if (state.loading) {
    fetch(`${serverUrl}/shows`)
      .then(resp => resp.json())
      .then((shows: string[]) => setState({
        ...initialState,
        loading: false,
        shows: shows
                .map(show => Number.parseInt(show, 10))
                .sort((a, b) => a - b)
      })
    );
    return (
      <div>Loading...</div>
    );
  }

  const displaySeatForm = state.currentShow && (state.suggestions.length === 0);

  return (
    <div>

      <ShowSelector 
        currentShow={state.currentShow} 
        shows={state.shows} 
        selectShow={selectShow} 
      />

      <Grid
        container
        direction="column"
        justify="center"
      >
        
        <br/> { /* gruik gruik marche pas sous ff */}

        <SeatsSuggestions 
          suggestions={state.suggestions} 
          currentSuggestion={state.currentSuggestion} 
          auditorium={state.auditorium} 
          selectSuggestion={selectSuggestion}
          bookAction={openBookDialog}
        />

        {displaySeatForm && <SeatsForm 
          numberOfSeats={state.numberOfSeats} 
          searchSeats={searchSeats} 
          specifyNumberOfSeats={specifyNumberOfSeats} 
        />}

      </Grid>

      {state.bookingDialog && <BookingDialog 
        suggestion={state.suggestions[state.currentSuggestion || 0]} 
        bookAction={bookSeats}
        cancelBooking={cancelBooking}
      />}

      <Confirmation 
        open={state.bookingConfirmed} 
        onClose={closeBookingConfirmation} 
      />

    </div>
  );
}

export default BookingApp;
