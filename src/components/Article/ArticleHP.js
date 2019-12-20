import React, {Component} from 'react';
import axios from 'axios';

const ARTC = '/articles';

class Articlehp extends Component {
 
  state = {
    arraydata: []
  }

  componentDidMount() {
    axios
      .get(ARTC)
      
      .then(result => this.setState({arraydata: result.data}));

  }
 

  render() {
    let arrayOfData = [];
    arrayOfData = this.state.arraydata;   
    
    let article = arrayOfData.map((data) => <li key={data.idarticle}>
      <h3>
        <span className="cat"><strong>Categorie</strong> {data.category}</span>{data.title}
        <span className="dat"><strong>Date</strong> {data.date}</span>
      </h3>
      <p>{data.text}</p>
    </li>);

    return (
      <div>
        <div className="col-md-2"></div>
        <div className="col-md-8 clearfix">
          <ul className="artcList">
            {article}
          </ul>
        </div>
      </div>
    )
  }
}

export default Articlehp;