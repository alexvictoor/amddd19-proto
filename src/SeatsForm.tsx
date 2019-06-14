import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import NativeSelect from "@material-ui/core/NativeSelect";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import React from "react";



const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 100
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    alignItems: 'flex-end',
  },
  selectShow: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    /*"&:before": {
      borderColor:theme.palette.common.white
    },*/
    color: 'white',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '75%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },

  button: {
    margin: theme.spacing(1),
  },

  section: {
    padding: theme.spacing(1, 3),
    margin: theme.spacing(5, 5),
  },

  formArea: {
    margin: theme.spacing(5, 5),
  },

  auditauriumArea: {
    margin: theme.spacing(1, 1),
  }


}));


interface SeatsFormProps {
  numberOfSeats: number | 'Unknown',
  specifyNumberOfSeats: (seats: number) => void,
  searchSeats: () => void,
}

export default function SeatsForm(props: SeatsFormProps) {
  const classes = useStyles();

  const { numberOfSeats, searchSeats, specifyNumberOfSeats } = props;

  return (
    <Grid item>
        <Paper className={classes.section} elevation={5}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"

          >
            <Grid item xs={9}>
              How many tickets do you want to buy?
            </Grid>
            <Grid container xs={3} justify='flex-end'>
              <NativeSelect
                className={classes.selectEmpty}
                name="ticket-number"
                onChange={event => specifyNumberOfSeats(Number.parseInt(event.target.value, 10))}
              >
                <option value="" disabled={numberOfSeats !== 'Unknown'}>
                  #
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>

              </NativeSelect>
            </Grid>

            <Grid item alignContent='flex-end'>
              <Button disabled={numberOfSeats === 'Unknown'} variant="contained" color="primary" className={classes.button} onClick={() => searchSeats()}>
                  SEARCH
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
  );
}