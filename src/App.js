import React, {Component} from 'react'; 
import './App.css';
import axios from 'axios'; 

const url = "http://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id='115135'"


class App extends Component {

  constructor(props)
  {
    super(props); 

    this.state = 
    {
       mlb : null 
    }; 
}

componentDidMount() {

    axios(url)  
    .then(result => {
      console.log("data", result.data.sport_career_hitting.queryResults.row)
      this.setState({mlb: result.data.sport_career_hitting.queryResults.row}
      )})
    .catch(error => error); 
}

  render() {

  const {mlb} = this.state



  return (
    <div className="App">
      <header className="App-header">
        <h1>MLB Stats</h1>
        <h2>Player: Ken Griffey, Jr.</h2> 
        <p> 
          {
          mlb ? `${mlb.hr} Homerun` : ""
          }
          </p>
        
        <p>
          {
            mlb ? `${mlb.rbi} RBI` : ""
          }
          </p>

      </header>
    </div>
    );
  }
}
export default App;

//Home Runs, RBIs, hits, runs, and stolen bases -- this is what to display