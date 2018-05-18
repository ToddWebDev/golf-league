import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import Article from './Article'
import Loading from './Loading'
import { getCourseArticles } from '../api'

export default class Articles extends Component {
  state = {
    courseArticles: [],
    loading: true,
  }
  componentDidMount() {
    getCourseArticles(this.props.match.params.courseId)
      .then((courseArticles) => {
        this.setState(() => ({
          loading: false,
          courseArticles: courseArticles.map((article) => article.title),
        }))
      })
  }
  render() {
    const { loading, courseArticles } = this.state
    const { params, url } = this.props.match
    const  { courseId } = params

    return loading === true
      ? <Loading />
      : <div className='container two-column'>
          <Sidebar
            loading={loading}
            title='Articles'
            list={courseArticles}
            {...this.props}
          />
          <Route path={`${url}/:articleId`} render={({ match }) => (
              <Article articleId={match.params.articleId} courseId={courseId}>
                {(article) => !article ? <Loading /> : (
                  <div className='panel'>
                    <article className='article' key={article.id}>
                      <h1 className='header'>{article.title}</h1>
                      <p>{article.body}</p>
                    </article>
                  </div>
                )}
              </Article>
            )}/>
        </div>
  }
}