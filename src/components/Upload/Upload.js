import React, {Component} from 'react';
import axios from 'axios';
import Articleform from '../Articleform/Articleform';

const UPL = '/upload';
 
class Upload extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);

    const data = {
      title: event.target.title.value,
      text: event.target.textarea.value,
      category: event.target.category.value
    };

    axios
      .post(UPL, {
        data: data,
        config: {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      })
      .then(function (response) {
        //handle success
        console.log(response)

      })
      .catch(function (response) {
        //handle error
        console.log(response)
      });
  }

  render() {

    let form = (
      <Articleform submitted={this.handleSubmit}></Articleform>
    );
    return (
      <div className="App">
        {form}
      </div>
    );
  }
}
export default Upload;