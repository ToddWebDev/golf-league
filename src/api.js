import {
  courses,
  players,
  generateArticle,
  generateCourseArticles
} from './dummy-data'

let cachedPlayers = null
let cachedCourses = {}
let cachedCourseNames = null

export function getPlayers (courseId) {
  return new Promise((res) => {
    if (cachedPlayers === null) {
      cachedPlayers = players
      return setTimeout(() => res(courseId ? courses[courseId].players : cachedPlayers), 800)
    }

    return res(courseId ? courses[courseId].players : cachedPlayers)
  })
}

export function getCourse (courseId) {
  return new Promise((res) => {
    if (typeof cachedCourses[courseId] === 'undefined') {
      cachedCourses[courseId] = courses[courseId]
      return setTimeout(() => res(cachedCourses[courseId]), 800)
    }

    return res(cachedCourses[courseId])
  })
}

export function getCourseNames () {
  return new Promise((res) => {
    if (cachedCourseNames === null) {
      cachedCourseNames = Object.keys(courses)
      return setTimeout(() => res(cachedCourseNames), 400)
    }

    return res(cachedCourseNames)
  })
}

export function getArticle (courseId, id) {
  return new Promise((res) => {
    setTimeout(() => res(generateArticle(courseId, id)), 700)
  })
}

export function getCourseArticles (courseId) {
  return new Promise((res) => {
    setTimeout(() => res(generateCourseArticles(courseId)), 700)
  })
}