export const ACTION_ADD_PLAYER = 'ADD_PLAYER'
export function addPlayer(name) {
  return {
    type: ACTION_ADD_PLAYER,
    name
  }
}

export const ACTION_REMOVE_PLAYER = 'REMOVE_PLAYER'
export function removePlayer() {
    return {
        type: ACTION_REMOVE_PLAYER
    }
}

export const ACTION_EDIT_INPUT = 'EDIT_INPUT'
export function editInput(path, value) {
  return {
    type: ACTION_EDIT_INPUT,
    path,
    value
  }
}

export const ACTION_TOGGLE_CLICK= 'ACTION_TOGGLE_CLICK'
export function toggleClick(path, value) {
    return {
        type: ACTION_TOGGLE_CLICK,
        path,
        value
    }
}