import React, {useEffect, useState} from 'react'
import moment from 'moment'
import {timeFinder, convertDuration} from '../helpers'


export default function Salat(){

const styles = {
  root:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'auto',
    border: 'solid black',
    borderRadius: 10,
    padding: 5,
    margin:5,
    backgroundColor: '#c4e87c'
  }
}

var maintenant = moment().format('HH:mm')

const [horaires, setHoraires] = useState([])

useEffect(async ()=> {

  function fetchDataToday(){
      fetch('https://api.pray.zone/v2/times/today.json?city=nanterre&school=11')
      .then(item => item.json())
      .then(item => {
                      //console.log(item.results.datetime[0].times)
                      setHoraires([item.results.datetime[0].times])
                      //setNextPriere(timeFinder(maintenant, horaires[0]))
                    })
      .catch(error => console.log('error', error))
  }

  fetchDataToday()

}, [])

if (horaires.length !==0) {
  var heurePrevue = timeFinder(maintenant, horaires[0])
  //console.log('heure Prevue', heurePrevue)
  var duree1 = moment.duration(heurePrevue)
  var duree2 = moment.duration(maintenant)
  var duree3 = duree1 - duree2
  console.log(convertDuration(duree3))


}


  return (
    <>
    <div style={styles.root}>
        <p>La prochaine Salat est à <strong>{horaires.length !==0 ? timeFinder(maintenant, horaires[0]) :'...'}</strong> </p>
        <p>{horaires.length !==0 ? convertDuration(duree3) : ''}</p>
        <p>Il est {maintenant}</p>
    </div>

    </>
  )

}
