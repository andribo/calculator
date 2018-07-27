import { Display } from 'Display'
import { Keyboard } from 'Keyboard'
import { storage } from 'storage'
import { keyboardBuilder } from 'keyboardBuilder'

export class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: storage.get(),
      clearBeforeNextChar: false
    }
    this.keyClickHandler = this.keyClickHandler.bind(this)
    this.keyboard = keyboardBuilder(this.keyClickHandler)
  }

  keyClickHandler({ input, nextChar, clearBeforeNextChar }) {
    this.setState(prevState => ({
      input: prevState.clearBeforeNextChar ? nextChar : input + nextChar,
      clearBeforeNextChar
    }), () => {
      if (clearBeforeNextChar) {
        storage.clear()
      } else {
        storage.set(input)
      }
    })
  }

  render() {
    const { input } = this.state

    return (
      <div className="col calculator">
        <Display input={input} />
        <Keyboard
          input={input}
          keyboard={this.keyboard}
          onClick={this.keyClickHandler}
        />
      </div>
    )
  }
}
