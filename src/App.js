import Today from './Components/TodayComp'
import Previous from './Components/PreviousDays'
import Grid from '@material-ui/core/Grid';

function App() {
  return (

    <Grid container direction="column" alignItems="center">

        <div>My homework!</div>
        {/*COMPOSANT TODAY ACTION*/}
        <Today/>
        {/*LISTE DES JOURS PASSES*/}
        <Previous/>

    </Grid>

  );
}

export default App;
