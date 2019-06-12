import Grid from '@material-ui/core/Grid';
import React from "react";
import getServerUrl from "./configuration";
import SeatsForm from "./SeatsForm";
import SeatsSuggestions, { Suggestion } from './SeatsSuggestions';
import ShowSelector from './ShowSelector';




interface BookingAppState {
  loading: boolean,
  currentShow: number | 'Unknown',
  numberOfSeats: number | 'Unknown',
  shows: number[],
  suggestions: Suggestion[],
  auditorium: { rows: any } | 'Unknown',
}

const initialState: BookingAppState = {
  loading: true,
  currentShow: 'Unknown',
  numberOfSeats: 'Unknown',
  shows: [],
  suggestions: [],
  auditorium: 'Unknown',
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
          auditorium
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
          suggestions: [
            ...mapSuggestionsGroups(1, suggestionsGroups['suggestionsForFirstCategory']),
            ...mapSuggestionsGroups(2, suggestionsGroups['suggestionsForSecondCategory']),
            ...mapSuggestionsGroups(3, suggestionsGroups['suggestionsForThirdCategory']),
            ...mapSuggestionsGroups('Mixed', suggestionsGroups['suggestionsForMixedCategory']),
          ]
        })
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

  return (
    <div>

      <ShowSelector currentShow={state.currentShow} shows={state.shows} selectShow={selectShow} />

      <Grid
        container
        direction="column"
        justify="center"
      //alignItems="stretch"
      //className="formArea"
      //spacing={0}
      >

        <SeatsForm numberOfSeats={state.numberOfSeats} searchSeats={searchSeats} specifyNumberOfSeats={specifyNumberOfSeats} />
        <SeatsSuggestions suggestions={state.suggestions} auditorium={state.auditorium} />

      </Grid>
    </div>
  );
}

export default BookingApp;
