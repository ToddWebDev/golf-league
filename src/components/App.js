import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Players from './Players'
import Courses from './Courses'
import Navbar from './Navbar'
import CoursePage from './CoursePage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/players' component={Players} />
            <Route path='/courses' component={Courses} />
            <Route path='/:courseId' exact component={CoursePage} />
            <Route render={() => <h1 className='text-center'>404 Not Found!</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
