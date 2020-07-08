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
      .then(result => result.data.filter(data => data.category === 'Home'))
      .then(result => this.setState({ arraydata: result }));
  }
 

  render() {
    let arrayOfData = [];
    arrayOfData = this.state.arraydata;
   
    let articles = arrayOfData.map((data) => <li key={data.idarticle}>
      <h3>
        {data.title}
        {data.secondheader ? <span className="secondheader"> {data.secondheader}</span> : null}
        <span className="dat"><strong>Date</strong> {data.date}</span>
      </h3>
      <p>{data.text}</p>
    </li>);

    return (
      <div>
        <div className="col-md-2"></div>
        <div className="col-md-8 clearfix">
          <ul className="artcList">
            {articles}
          </ul>
        </div>
      
        </div>
    )
  }
}

export default Articlehp;