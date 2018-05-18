import React, { Component } from 'react'
import TeamLogo from './TeamLogo'
import { Link } from 'react-router-dom'
import { getCourseNames } from '../api'

export default class Home extends Component {
  state = {
    courseNames: []
  }
  componentDidMount() {
    getCourseNames()
      .then((courseNames) => this.setState(() => ({
        courseNames
      })))
  }
  render() {
    const {courseNames} = this.state
    
      return (
        <div className='container'>
          <h1 className='large-header'>Golf League</h1>
          <h3 className='header text-center'>
            Select a Course
          </h3>
          <div className='home-grid'>
            {courseNames.map((id) => (
              <Link key={id} to ={`/${id}`}>
                <TeamLogo id={id} width='125px' />
              </Link>
            ))}
          </div>
        </div>
      )
  }
}