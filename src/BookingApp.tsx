import Grid from '@material-ui/core/Grid';
import React from "react";
import getServerUrl from "./configuration";
import SeatsForm from "./SeatsForm";
import SeatsSuggestions from './SeatsSuggestions';
import ShowSelector from './ShowSelector';
import BookingDialog from './BookingDialog';

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
  bookingMode: boolean
}

const initialState: BookingAppState = {
  loading: true,
  shows: [],
  currentShow: undefined,
  auditorium: undefined,
  numberOfSeats: undefined,
  suggestions: [],
  currentSuggestion: undefined,
  bookingMode: false
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
      bookingMode: true,
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
    )
      .then(_ => {
        alert('coucou');
        setState({
          ...initialState
        });
      });
    // HACK - à enlever quand le booking marchera
    setState({
      ...initialState
    });
  }

  const cancelBooking = () => {
    setState({
      ...state,
      bookingMode: false,
    });
  }

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

      {state.bookingMode && <BookingDialog 
        suggestion={state.suggestions[state.currentSuggestion || 0]} 
        bookAction={bookSeats}
        cancelBooking={cancelBooking}
      />}

    </div>
  );
}

export default BookingApp;
