import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import NativeSelect from "@material-ui/core/NativeSelect";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import React from "react";
import ShowSelector from './ShowSelector';
import SeatsSuggestions from './SeatsSuggestions';
import SeatsForm from "./SeatsForm";



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

  const selectShow = (showId: string) => {
    alert(`coucou ${showId}`);  
  } 

  return (
    <div>

      <ShowSelector shows={['1er show', '2eme show', '....']} selectShow={selectShow} />
      
      <Grid
        container
        direction="column"
        justify="center"
        //alignItems="stretch"
        //className="formArea"
        //spacing={0}
      >

      <SeatsForm />
      <SeatsSuggestions />
       
      </Grid>
    </div>
  );
}

export default BookingApp;
