import React, {Component} from 'react';
import axios from 'axios';
import Articleform from '../Articleform/Articleform';
import Article from '../Article/Article';

const UPL = '/upload';
 
class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      category: '',

        type: '',
        message: ''
      
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);

    this.setState({
      title: event.target.title.value,
      text: event.target.textarea.value,
      category: event.target.category.value
    });

    const data = {
      title: event.target.title.value,
      text: event.target.textarea.value,
      category: event.target.category.value
    };
    let that = this;
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
        that.setState({type: 'success', message: 'We have received your message and will get in touch shortly. Thanks!'});
      })
      .catch(function (error) {
        console.log(error)
        that.setState({type: 'danger', message: '?????'});
      });
  }

  render() {
    if (this.state.type && this.state.message) {
      var classString = 'alert alert-' + this.state.type;
      var status = <div id="status" className={classString} ref="status">
                     {this.state.message}
                   </div>;
    }
    let form = (
      <Articleform submitted={this.handleSubmit}></Articleform>
    );
    let artc = (
      <Article></Article>
    );
    return (
      <div className="App">
        {status}
        {form}
        {artc}
      </div>
    );
  }
}
export default Upload;