import React, {Component} from 'react';
import axios from 'axios';
import SidebarComponent from '../component/Sidebar/Sidebar'
const ARTC = '/articles';

class Sidebar extends Component {
  state = {
    arraydata: []
  }

  componentDidMount() {
    axios
      .get(ARTC)
      .then(result => result.data.filter(data => data.category === 'Sidebar'))
      .then(result => this.setState({ arraydata: result }));
  }
 

  render() {
    let arrayOfData = [];
    arrayOfData = this.state.arraydata;
    // arrayOfData.filter(data => data.category === 'Home');
    console.log(arrayOfData);
    
    let sidebararticles = arrayOfData.map((data) => <li key={data.idarticle}>
      <h3>
        <span className="cat"><strong>Categorie</strong> {data.category}</span>{data.title}<span className="secondheader"> {data.secondheader}</span>
        <span className="dat"><strong>Date</strong> {data.date}</span>
      </h3>
      <p>{data.text}</p>
    </li>);
      this.props.content = sidebararticles;
    return (
      <div>
      <SidebarComponent content={sidebararticles}></SidebarComponent>
            
      </div>
    )
  }
}

export default Sidebar;