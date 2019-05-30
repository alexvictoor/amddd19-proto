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


function SimpleExpansionPanel() {

  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Category 1 - A7 A8</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid
        container
        direction="column">
                    <div style={{display: 'flex', justifyContent: 'center' }}>
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center' }}>
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center' }}>
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="error" />
                            <SeatIcon color="primary" />
                            <SeatIcon color="secondary" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center' }}>
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center' }}>
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                            <SeatIcon color="action" />
                        </div>
                </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Expansion Panel 2</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
   
    </div>
  );
}

export default SimpleExpansionPanel;