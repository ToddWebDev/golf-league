import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import { getCourseNames } from '../api'
import TeamLogo from './TeamLogo'
import Course from './Course'
import Loading from './Loading'

export default class Courses extends Component {
  state =  {
    courseNames: [],
    loading: true
  }
  componentDidMount () {
    getCourseNames()
      .then((courseNames) => {
        this.setState(() => ({
          loading: false,
          courseNames,
        }))
      })
  }
  render() {
    const { loading, courseNames } = this.state
    const { location, match } = this.props
    
      return (
        <div className='container two-column'>
          <Sidebar
            loading={loading}
            title="Courses"
            list={courseNames}
            {...this.props}
          />
          
          {loading === false && location.pathname === '/courses'
            ? <div className='sidebar-instruction'>Select a Team</div>
            : null }
            
            <Route path={`${match.url}/:courseId`} render={({ match }) => (
            <div className='panel'>
              <Course id={match.params.courseId}>
                {(course) => course === null
                  ? <Loading />
                  : <div style={{width: '100%'}}>
                      <TeamLogo id={course.id} className='center' />
                      <h1 className='medium-header'>{course.name}</h1>
                      <ul className='info-list row'>
                        <li>Established<div>{course.established}</div></li>
                        <li>Manager<div>{course.manager}</div></li>
                        <li>Coach<div>{course.coach}</div></li>
                      </ul>
                      <Link
                        className='center btn-main'
                        to={`/${match.params.courseId}`}>
                          {course.name} Course Page
                      </Link>
                    </div>}
              </Course>
            </div>
          )} />
        </div>
      )
  }
}