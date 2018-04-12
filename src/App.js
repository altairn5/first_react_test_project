import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
// components can be given an alias it seems
import SearchForm from './components/FirstComponent'
import Results    from './components/Results'


class App extends Component{
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>First React Project</h1>
            <p>First Try with React</p>
          </Grid>
        <SearchForm />
        </Jumbotron>
        <Results />
      </div>
    )
  }
}

export default App;
