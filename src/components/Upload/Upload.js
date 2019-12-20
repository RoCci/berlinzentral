import React, {Component} from 'react';
import axios from 'axios';
import Articleform from '../Articleform/Articleform';
// import ArticleHP from '../Article/ArticleHP';

const UPL = '/upload';
 
class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      secondheader: '',
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
      secondheader: event.target.secondheader.value,
      text: event.target.textarea.value,
      category: event.target.category.value
    });

    const data = {
      title: event.target.title.value,
      secondheader: event.target.secondheader.value,
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
    let form = null;
    let status = null;
    if (this.state.type && this.state.message) {
      var classString = 'alert alert-' + this.state.type;
      status = <div id="status" className={classString} ref="status">
                     {this.state.message}
                   </div>;
    }
    form = (
      <Articleform submitted={this.handleSubmit}></Articleform>
    );
    
    return (
      <div className="form">
        {status}
        {form}
      </div>
    );
  }
}
export default Upload;