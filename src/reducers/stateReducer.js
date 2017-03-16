import { Map, List } from 'immutable'

import {
  ACTION_ADD_PLAYER,
    ACTION_REMOVE_PLAYER,
    ACTION_TOGGLE_CLICK,
  ACTION_EDIT_INPUT
} from '../actions/actionCreators'

const addPlayer = (action) => (state) => {
    const players = state.getIn(["data", "players"], List())
    return state.setIn(["data", "players"], players.push(action.name))
}
const removePlayer = (action) => (state) => {
    const players = state.getIn(["data", "players"], List())
    console.log('Player removed')
    return state.setIn(["data", "players"], players.pop())
}

const editInput = (action) => (state) => {
  return state.setIn(action.path, action.value)
}

const toggleClick = (action) => (state) => {

    const isclick = state.getIn(["ui", "is-clicked"], false)
    if (isclick)
        return state.setIn(["ui","is-clicked"], false)
    else
        return state.setIn(["ui","is-clicked"], true)
}

const applyFn = (state, fn) => fn(state)

const pipe = (fns, state) =>
  state.withMutations(s => fns.reduce(applyFn, s))

const state = (state = Map(), action) => {
  switch (action.type) {

    case ACTION_ADD_PLAYER:
      return pipe([
          addPlayer(action),
      ], state)

      case ACTION_REMOVE_PLAYER:
          return pipe([
              removePlayer(action),
          ], state)

    case ACTION_EDIT_INPUT:
      return pipe([
        editInput(action),
      ], state)

      case ACTION_TOGGLE_CLICK:
          return pipe([
              toggleClick(action),
          ], state)

    default:
      return state
  }
}

export default state
