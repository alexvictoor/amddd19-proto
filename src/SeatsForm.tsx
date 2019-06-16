import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import NativeSelect from "@material-ui/core/NativeSelect";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import React from "react";



const useStyles = makeStyles((theme: Theme) => ({
  
  selectEmpty: {
    marginTop: theme.spacing(2),
    alignItems: 'flex-end',
  },

  button: {
    margin: theme.spacing(1),
  },

  section: {
    padding: theme.spacing(1, 3),
    margin: theme.spacing(5, 5),
  },

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
                value={numberOfSeats}
                onChange={event => specifyNumberOfSeats(Number.parseInt(event.target.value, 10))}
              >
                <option value="Unknown" disabled={numberOfSeats !== 'Unknown'}>
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