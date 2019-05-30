import AppBar from '@material-ui/core/AppBar';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from '@material-ui/core/Grid';
import NativeSelect from "@material-ui/core/NativeSelect";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import React from "react";
import DemoTabs from './DemoTabs';


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


function BookingApp() {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    if (inputLabel.current !== null) {
      const current: any = inputLabel.current;
      setLabelWidth(current.offsetWidth);
    }
  }, []);

  const [values, setValues] = React.useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const handleChange = (name: string) => (event: any) => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  return (
    <div style={{padding:'0px,0px,0px,0px', width: '100%' }} >
      <AppBar position="static" style={{ width: '100%' }}>
        <FormControl className={classes.formControl} fullWidth >
          <NativeSelect
            className={classes.selectShow}
            value={values.age}
            name="age"
            onChange={handleChange("age")}
          >
            <option value="" disabled>
              Show id
          </option>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>
      </AppBar>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        className="formArea"
      >

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
              >
                <option value="" disabled>
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

            <Grid item xs={9}>
              Choose a pricing category
            </Grid>
            <Grid container xs={3} justify='flex-end'>
              <NativeSelect
                className={classes.selectEmpty}
                name="category"
              >
                <option value="" disabled>
                  Category
                </option>
                <option value={10}>Category 1</option>
                <option value={20}>Category 2</option>
                <option value={30}>Category 3</option>
              </NativeSelect>
            </Grid>
            <Grid item alignContent='flex-end'>
              <Button variant="contained" color="primary" className={classes.button}>
                  SEARCH
              </Button>
            </Grid>
          </Grid>
        </Paper>
        </Grid>

        <Grid item className={classes.auditauriumArea}>
       
          <DemoTabs/>


        </Grid>
       
      </Grid>
    </div>
  );
}

export default BookingApp;
