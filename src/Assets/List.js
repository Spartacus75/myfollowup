import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//import InboxIcon from '@material-ui/icons/Inbox';
//import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    //maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList({data, onClickItem}) {
  const classes = useStyles();



  console.log(data)

  return (
    <div className={classes.root}>
      <List component="nav" >



{     data.map((item, index) => {return(
        <ListItem button key={index} style={{width: '100%'}} onClick={onClickItem}>

            <div style={{border: 'solid black', width: '100%', borderRadius: 10, padding: 10}}>

        <p style={{width: 150}}>{item.date}</p>

          <ListItemText button primary={item.text} />

            </div>

        </ListItem>)
      }
    )
}




      </List>

    </div>
  );
}
