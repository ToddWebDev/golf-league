import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import { getPlayers } from '../api'
import { parse } from 'query-string'
import slug from 'slug'
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group'


export default class Players extends Component {
  state = {
    players: [],
    loading: true
  }
  componentDidMount() {
    const { location } = this.props
    location.search ? this.fetchPlayers(parse(location.search).courseId) : this.fetchPlayers()
  }
  fetchPlayers = (courseId) => {
    getPlayers(courseId)
    .then((players) => this.setState(() => ({
      loading: false,
      players
    })))
  }
  render() {
    const { players, loading } = this.state
    const { match, location } = this.props
      return (
        <div className='container two-column'>
          <Sidebar
          loading={loading}
          title='Players'
          list={players.map((player) => player.name)}
          {...this.props}
        />

        {loading === false && location.pathname === '/players'
          ? <div className='sidebar-instruction'>Select a Player</div>
          : null}
          
        <Route path={`${match.url}/:playerId`} render={({match}) => {
          if (loading === true) return null
          
          const {
            name, courseId, avatar, hcp, rpg, gir, fir, putts
          } = players.find((player) => slug(player.name) === match.params.playerId)
          
          return (
            <TransitionGroup className='panel'>
              <CSSTransition key={location.key} timeout={250} classNames='fade'>
                <div className='panel'>
                 <img className='avatar' src={`${avatar}`} alt={`${name}'s avatar`} />
                 <h1 className='medium-header'>{name}</h1>
                 <div className='row'>
                   <ul className='info-list' style={{marginRight: 80}}>
                     <li>Home Course
                       <div>
                         <Link style={{color: '#68809a'}} to={`/${courseId}`}>
                           {courseId[0].toUpperCase() + courseId.slice(1)}
                         </Link>
                       </div>
                     </li>
                     <li>Handicap<div>{hcp}</div></li>
                     <li>Rounds Played<div>{rpg}</div></li>
                   </ul>
                   <ul className='info-list'>
                     <li>GIR<div>{gir}</div></li>
                     <li>FIR<div>{fir}</div></li>
                     <li>Putts<div>{putts}</div></li>
                   </ul>
                 </div>
               </div>
              </CSSTransition>
            </TransitionGroup>
          )
        }} />
        </div>
      )
  }
}