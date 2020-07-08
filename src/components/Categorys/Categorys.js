import React, {Component} from 'react';
import axios from 'axios';

const CAT = '/categorys';
class CategorySelect extends Component {
  state = {
    arraydata: []
  }
    
  componentDidMount() {
    axios
      .get(CAT)
      .then(result => this.setState({arraydata: result.data}));
  }
  // On the change event for the select box pass the selected value back to the
  // parent

  render() {
    let arrayOfData = this.state.arraydata;

    let options = arrayOfData
      .map((data) => <option key={data.idcategorys} value={data.category} defaultValue=" ">
        {data.category}
      </option>);

    return (
      <select
        name="category"
        className="form-control"
        onChange={this.handleChange}>
        <option value="">Select Item</option>
        {options}
      </select>
    )
  }
}

export default CategorySelect;