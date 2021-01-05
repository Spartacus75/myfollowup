import Today from './Components/TodayComp'
import Previous from './Components/PreviousDays'
import Salat from './Components/Salat'
import Grid from '@material-ui/core/Grid';

function App() {
  return (

    <Grid container direction="column" alignItems="center">

        <h1>My homework!</h1>
        {/*SALAT COMPOSANT*/}
        <Salat/>
        {/*COMPOSANT TODAY ACTION*/}
        <Today/>
        {/*LISTE DES JOURS PASSES*/}
        <Previous/>

    </Grid>

  );
}

export default App;
