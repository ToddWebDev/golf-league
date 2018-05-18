import React, { Component } from 'react'
import Sidebar from './Sidebar'
import { getCourseNames } from '../api'

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
        </div>
      )
  }
}