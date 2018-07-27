let _cb = null
let _keyboard = null

const onKeydown = ({ key }) => {
  const clickHandler = _keyboard.keyMap[key] ?
    _keyboard.keyMap[key].clickHandler :
    null

  if (clickHandler && _cb) _cb(clickHandler)
}

export const keyboardListener = {
  init: keyboard => {
    _keyboard = keyboard
  },
  start: cb => {
    _cb = cb
    document.addEventListener('keydown', onKeydown)
  },
  stop: () => {
    _cb = null
    document.removeEventListener('keydown', onKeydown)
  }
}
