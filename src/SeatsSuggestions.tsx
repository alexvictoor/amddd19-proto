import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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
  rows: {[row: string]: Seat[]},
} 
interface SeatsSuggestionsProps {
  suggestions: Suggestion[],
  auditorium: 'Unknown' | Auditorium
}

const suggestionToString = (suggestion: Suggestion) => (
  `${suggestion.category} - ${suggestion.totalPrice}€ - ${suggestion.seats.join(', ')}`
);

export default function SeatsSuggestions(props: SeatsSuggestionsProps) {

  const [expanded, setExpanded] = React.useState<number | false>(0);

  const handleChange = (panelIndex: number) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panelIndex : false);
  };

  const { auditorium } = props;
  if (auditorium === 'Unknown') {
    return (<div/>); 
  }

  const seatColor = (seat: Seat, suggestion: Suggestion) => {
    if (seat.category === 1) {
      return 'primary';
    }
    return 'action';
  }

  const seatBackgroundColor = (seat: Seat, suggestion: Suggestion) => {
    if (suggestion.seats.includes(seat.name)) {
      return 'yellow';
    }
    if (seat.reservationStatus > 0) {
      return 'pink';
    }
   
    return 'white';
  }

  return (
    <div>
      {props.suggestions.map((suggestion, index) => (
        <ExpansionPanel key={`suggestion_${index}`} expanded={index === expanded} onChange={handleChange(index)}>
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

            { Object.entries(auditorium.rows).map(([name, row]) => (
              <div key={`row_${index}_${name}`} style={{ display: 'flex', justifyContent: 'center' }}>
                { row.map(seat => (
                  <SeatIcon key={seat.name} color={seatColor(seat, suggestion)}  style={{ backgroundColor: seatBackgroundColor(seat, suggestion) }} />
                )) }
              </div>
            ))}

            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}