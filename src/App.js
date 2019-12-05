import React, { Component } from 'react';
import axios from 'axios';

import Article from './components/Article/Article';
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
    let artc = (
      <Article></Article>
    );
    return (
      <div className="Users">
        {artc}
        </div>
    );
  }
}

export default App;
