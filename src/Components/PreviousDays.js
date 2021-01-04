import React, {useState, useEffect} from 'react'
import List from '../Assets/List'
import firebase from '../firebase.js'

export default function Previous(){

const styles = {
  previous: {
    width: '100%',
    border: 'solid black'
  }
}

const [dataToDisplay, setDataToDisplay] = useState([])

useEffect(()=>{
  const fetchData = async () => {

    var array =[]
    firebase.firestore().collection("WhatIDone").get()
        .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            array.push(doc.data())

        });
        setDataToDisplay(array)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });



  }
 fetchData()

}, [])

return (
  <div style={styles.previous}>
  Previous days
  <List
  data={dataToDisplay.sort((a, b) => parseFloat(b.timestamp) - parseFloat(a.timestamp))}
  onClickItem={()=>alert('click to edit or delete an item')}
  />
  </div>
)

}
