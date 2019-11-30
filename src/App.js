import React, {Component} from 'react';
import './App.css';
class App extends Component {
  state = {
      members: []
    }
  
  componentDidMount() {
    fetch('/articles')
      .then(res => res.json())
      .then(members => this.setState({ members: members }));
    console.log(this.members);
    
  }

  render() {
  
    return (
        <div className="Users">
          <h1>Users</h1>
          {this.state.members.map(member =>
            <div key={member.id}>{member.name} {member.surname} - {member.email}</div>
          )}
        </div>
    );
  }
}

export default App;
