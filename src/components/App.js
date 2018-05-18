import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Loading from './Loading'

import DynamicImport from './DynamicImport'

const Home = (props) => (
  <DynamicImport load={() => import('./Home')}>
    {(Component) => Component === null
      ? <Loading /> 
    : <Component {...props} />}
  </DynamicImport>
)

const Players = (props) => (
  <DynamicImport load={() => import('./Players')}>
    {(Component) => Component === null
      ? <Loading /> 
    : <Component {...props} />}
  </DynamicImport>
)

const Courses = (props) => (
  <DynamicImport load={() => import('./Courses')}>
    {(Component) => Component === null
      ? <Loading /> 
    : <Component {...props} />}
  </DynamicImport>
)

const CoursePage = (props) => (
  <DynamicImport load={() => import('./CoursePage')}>
    {(Component) => Component === null
      ? <Loading /> 
    : <Component {...props} />}
  </DynamicImport>
)

const Articles = (props) => (
  <DynamicImport load={() => import('./Articles')}>
    {(Component) => Component === null
      ? <Loading /> 
    : <Component {...props} />}
  </DynamicImport>
)

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
            <Route path='/:courseId/articles' component={Articles} />
            <Route render={() => <h1 className='text-center'>404 Not Found!</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
