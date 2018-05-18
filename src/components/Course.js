import { Component } from 'react'
import PropTypes from 'prop-types'
import { getCourse } from '../api'

export default class Course extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
  }
  state = {
    course: null,
  }
  componentDidMount () {
    this.fetchCourse(this.props.id)
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.id !== nextProps.id) {
      this.fetchCourse(nextProps.id)
    }
  }
  fetchCourse = (id) => {
    this.setState(() => ({ course: null }))
    getCourse(id)
      .then((course) => this.setState(() => ({ course })))
  }
  render () {
    return this.props.children(this.state.course)
  }
}