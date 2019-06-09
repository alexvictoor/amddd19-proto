import AppBar from '@material-ui/core/AppBar';
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import React from "react";


const useStyles = makeStyles((theme: Theme) => ({

  formControl: {
    margin: theme.spacing(1),
    // minWidth: 100
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
 

}));

interface ShowSelectorProps {
  currentShow?: string,
  shows: string[],
  selectShow: (showId: string) => void,
}


export default function ShowSelector(props: ShowSelectorProps) {
  const classes = useStyles();

  const { currentShow, shows, selectShow } = props;

  return (
      <AppBar position="sticky" style={{ width: '100%' }}>
        <FormControl className={classes.formControl}>
          <NativeSelect
            className={classes.selectShow}
            /*value={values.age}*/
            name="showId"
            onChange={(event) => selectShow}
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
  );
}
