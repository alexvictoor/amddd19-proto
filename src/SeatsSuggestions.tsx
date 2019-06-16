import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiButton from "@material-ui/core/Button";
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import SeatIcon from './SeatIcon';
import { Grid } from '@material-ui/core';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

const Button = withStyles(theme => ({
  root: {
    margin: theme.spacing(2),
  },
}))(MuiButton);

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
interface SeatsSuggestionsProps {
  currentSuggestion: 'Unknown' | number,
  selectSuggestion: (suggestion: number) => void,
  suggestions: Suggestion[],
  auditorium: 'Unknown' | Auditorium
}

const suggestionToString = (suggestion: Suggestion) => (
  `Suggestion for ${suggestion.category} - ${suggestion.totalPrice}€ - ${suggestion.seats.join(', ')}`
);

const seatColor = (seat: Seat) => {
  if (seat.reservationStatus > 0) {
    return '#b71c1c';
  }
  if (seat.category === 1) {
    return '#ffa000';
  }
  if (seat.category === 2) {
    return '#607d8b';
  }
  // 3...
  return '#009688';
}

const seatBackgroundColor = (seat: Seat, suggestion: Suggestion) => {
  if (suggestion.seats.includes(seat.name)) {
    return '#ffcdd2';
  }

  return 'white';
}

export default function SeatsSuggestions(props: SeatsSuggestionsProps) {

  const handleChange = (panelIndex: number) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    if (newExpanded) {
      props.selectSuggestion(panelIndex);
    }
  };

  const { auditorium } = props;
  if (auditorium === 'Unknown') {
    return (<div />);
  }

  if (props.suggestions.length === 0) {
    return (
      <Grid
        container
        direction="column">

        {Object.entries(auditorium.rows).map(([name, row]) => (
          <div key={`auditorium_row_${name}`} style={{ display: 'flex', justifyContent: 'center' }}>
            {row.map(seat => (
              <SeatIcon key={seat.name} htmlColor={seatColor(seat)} />
            ))}
          </div>
        ))}

      </Grid>
    );
  }

  return (
    <div>
      {props.suggestions.map((suggestion, index) => (
        <ExpansionPanel key={`suggestion_${index}`} expanded={index === props.currentSuggestion} onChange={handleChange(index)}>
          <ExpansionPanelSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{suggestionToString(suggestion)}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid
              container
              direction="column">

              {Object.entries(auditorium.rows).map(([name, row]) => (
                <div key={`row_${index}_${name}`} style={{ display: 'flex', justifyContent: 'center' }}>
                  {row.map(seat => (
                    <SeatIcon key={seat.name} htmlColor={seatColor(seat)} style={{ backgroundColor: seatBackgroundColor(seat, suggestion) }} />
                  ))}
                </div>
              ))}

              <Grid
                container
                direction="row"
                justify="center">
                <Button disabled={true} variant="contained" color="primary" >
                  BOOK SEATS
                    </Button>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}