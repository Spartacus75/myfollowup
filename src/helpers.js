export function timeFinder(time, timetable){


/*
  Asr: "14:50"
  Dhuhr: "12:56"
  Fajr: "07:27"
  Imsak: "07:17"
  Isha: "18:25"
  Maghrib: "17:10"
  Midnight: "00:56"
  Sunrise: "08:43"
  Sunset: "17:10"
*/





  switch (true) {
    case time < timetable.Fajr :
      return timetable.Fajr;
      //break;
    case time>timetable.Fajr && time<timetable.Dhuhr:
      return timetable.Dhuhr;
      //break;
    case time>timetable.Dhuhr && time<timetable.Asr:
      return timetable.Asr;
      //break;
    case time>timetable.Asr && time<timetable.Maghrib:
      return timetable.Maghrib;
      //break;
    case time>timetable.Maghrib && time<timetable.Isha:
      return timetable.Isha;
      //break;
    default:
      return timetable.Fajr

  }


}

export function convertDuration(duree){

  //on convertit en secondes et en minutes
  var secondesTotale = duree/1000
  var minutesTotale = secondesTotale / 60

  //on compte le nombre d'heures

  var heures = Math.floor(minutesTotale / 60)

  //on compte le nombre de minutes

  var minutes = minutesTotale - heures * 60

  //on fait le string à renvoyer

  var conversion = `${heures} heure(s) et ${minutes} minutes avant la prochaine Salat`


  return conversion

}
