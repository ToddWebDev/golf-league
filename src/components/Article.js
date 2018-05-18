import { Component } from 'react'
import PropTypes from 'prop-types'
import { getArticle } from '../api'

export default class Article extends Component {
  static propTypes = {
    courseId: PropTypes.string.isRequired,
    articleId: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
  }
  state = {
    article: null,
  }
  componentDidMount () {
    const { courseId, articleId } = this.props
    this.getArticle(courseId, articleId)
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.articleId !== nextProps.articleId) {
      this.getArticle(nextProps.courseId, nextProps.articleId)
    }
  }
  getArticle = (courseId, articleId) => {
    this.setState(() => ({
      article: null
    }))

    getArticle(courseId, articleId)
      .then((article) => this.setState(() => ({ article })))
  }
  render () {
    return this.props.children(this.state.article)
  }
}