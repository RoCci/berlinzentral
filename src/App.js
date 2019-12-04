import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const API = '/articles';

class App extends Component {
  state = {
    artc: [],
    artctitle: [],
    artctext: []
  };
  
  componentDidMount() {

    
    axios.get(API)
     .then(result => this.setState({
       artc: result.data.map(id => id.idarticle),
       artctitle: result.data.map(title => title.title),
       artctext: result.data.map(text => text.text)
     }));    

  }


  render() {
  
    return (
        <div className="Users">
          <h1>Artikel</h1>
        </div>
    );
  }
}

export default App;
