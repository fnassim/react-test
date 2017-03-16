import React from 'react'

import { addPlayer, removePlayer,editInput } from "../actions/actionCreators"

import '../resources/css/player.css';

const displayPlayersList = (players_list) => {
  if (players_list) {
    return players_list.map( (player) => (<div>{ player }</div>) )
  }
}

const Players = (props) => {
  const player_name = props.state.getIn(["ui", "input-player"], "")
  const players_list = props.state.getIn(["data", "players"], [])

  return (
    <div>
      <h1>Players</h1>
      { displayPlayersList(players_list) }
      <div>
        <input id="input-name"
               onChange={ (event) => {
                 props.dispatch(editInput(["ui", "input-player"], event.target.value))
               }}
               value={ player_name }/>

        <button onClick={ (event) => {
                  props.dispatch(addPlayer(player_name))
                }}>
                Add a player
        </button>
          <button
              onClick={ (event) => {
                  props.dispatch(removePlayer())
              }}>
              Remove a player
          </button>
      </div>
        <div id="input" contenteditable>I look like an input</div>
    </div>
  )
}

export default Players
