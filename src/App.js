import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Upload from './components/Upload/Upload';
import Article from './components/Article/ArticleHP';
class App extends Component {
  render() {
    return (
     
      <div className="Main">
        <header>
          <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/upload'} className="nav-link">Upload</Link>
                </li>
              </ul>
            </nav>
     
            <Switch>
              <Route path='/upload' component={Upload} />
            </Switch>
          </Router>
        </header>
        <div className="row">
        <div className="content col-sm-8">
          <Article></Article>
        </div>
        </div>
        </div>
    );
  }
}
export default App;
