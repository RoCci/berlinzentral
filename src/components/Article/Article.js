import React, {Component} from 'react';
import axios from 'axios';

const ARTC = '/articles';

class Article extends Component {
  state = {
    arraydata: []
  }

  componentDidMount() {
    axios
      .get(ARTC)
      .then(result => this.setState({arraydata: result.data}));
  }
  // On the change event for the select box pass the selected value back to the
  // parent

  render() {
    let arrayOfData = this.state.arraydata;

    let articles = arrayOfData.map((data) => <li key={data.idcategorys}>
      <h3>
        <span className="cat"><strong>Categorie</strong> {data.category}</span>{data.title}
        <span className="dat"><strong>Date</strong> {data.date}</span>
      </h3>
      <p>{data.text}</p>
    </li>);

    return (
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8 clearfix">
          <ul className="artcList">
            {articles}
          </ul>
        </div>
      </div>
    )
  }
}

export default Article;