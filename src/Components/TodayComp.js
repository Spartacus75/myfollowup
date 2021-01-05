import React, {useState} from 'react'
import Button from '../Assets/Button'
import TextField from '../Assets/TextField'
import moment from 'moment'
import firebase from '../firebase'
import Dialog from '../Assets/Dialog'

export default function Today(){

  const styles= {
    today:{
      width: '100%',
      //border: 'solid black'
    }
  }

  const [valueTodayText, setValueTodayText] = useState('')
  const[openDialog, setOpenDialog] = useState(false)

  const onChangeTodayText = (event) => {
    setValueTodayText(event.target.value)
    //alert(event.target.value)
  }

  const onClickrecord =() => {

  if (valueTodayText=='') {setOpenDialog(true)} else {

  firebase.firestore().collection("WhatIDone")
                      .doc(moment().format('MMM Do YYYY, hh:mm'))
                      .set({
                              date: moment().format('MMM Do YYYY, hh:mm'),
                              text: valueTodayText,
                              timestamp: moment().unix()
        })
        .then(function() {
            console.log("Document successfully written!");
            setValueTodayText('')
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
      }

  }

  const handleClose = () => {
    setOpenDialog(false)
  }

return (
  <>
  <div style={styles.today}>
        <TextField
            label={'What I did on ' + moment().format('MMM Do YYYY')}
            rows={4}
            onChange={onChangeTodayText}
            value={valueTodayText}
        />
        <Button
            color="primary"
            text="Record"
            onClick={onClickrecord}
        />
  </div>

  <Dialog
      open={openDialog}
      handleClose={handleClose}
      title="Attention!"
      description="Enregistrement incomplet!"
  />

  </>
)

}
