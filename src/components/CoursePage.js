import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { getCourseArticles, getCourseNames } from '../api'
import TeamLogo from './TeamLogo'
import Course from './Course'
import Loading from './Loading'
import slug from 'slug'

export default class CoursePage extends Component {
  state = {
    loading: true,
    courseNames: {},
    articles: [],
  }
  componentDidMount() {
    Promise.all([
      getCourseNames(),
      getCourseArticles(this.props.match.params.courseId)
    ]).then(([courseNames, articles]) => {
        this.setState(() => ({
          articles,
          courseNames,
          loading: false
        }))
      })
    }
  render() {
    const { loading, articles, courseNames } = this.state
    const { match } = this.props
    const { courseId } = match.params
    
    if (
      loading === false &&
      courseNames.includes(courseId) === false
    ) {
      return <Redirect to='/' />
    }
    
    return (
      <div>
        <Course id={courseId}>
          {(course) => course === null
            ? <Loading />
            : <div className='panel'>
                <TeamLogo id={courseId} />
                <h1 className='medium-header'>{course.name}</h1>
                <h4 style={{margin: 5}}>
                  <Link 
                    style={{cursor: 'pointer'}}
                    to={{pathname: '/players', search: `?courseId=${courseId}`}}
                    >
                    View Roster
                  </Link>
                </h4>
                <h4>Hosted Championships</h4>
                <ul className='championships'>
                  {course.championships.map((ship) => <li key={ship}>{ship}</li>)}
                </ul>
                <ul className='info-list row' style={{width: '100%'}}>
                  <li>Established<div>{course.established}</div></li>
                  <li>Manager<div>{course.manager}</div></li>
                  <li>Coach<div>{course.coach}</div></li>
                  <li>Record<div>{course.wins}-{course.losses}</div></li>
                </ul>
                <h2 className='header'>Articles</h2>
                <ul className='articles'>
                  {articles.map((article) => (
                    <li key={article.id}>
                      <Link to={`${match.url}/articles/${slug(article.title)}`}>
                        <h4 className='article-title'>{article.title}</h4>
                        <div className='article-date'>{article.date.toLocaleDateString()}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            }
        </Course>
      </div>
    )
  }
}