import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      //width: '25ch',
      width: '100%'
    },
  },
}));

export default function MultilineTextFields({label, rows, onChange, value}) {


  const classes = useStyles();
/*  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
*/

  return (
    <form className={classes.root} noValidate autoComplete="off">

        <TextField
          id="outlined-multiline-static"
          label={label}
          multiline
          rows={rows}
          //defaultValue=""
          variant="outlined"
          value={value}
          onChange={onChange}
        />

    </form>
  );
}
