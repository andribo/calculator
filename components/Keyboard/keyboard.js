import { Button } from 'Button'
import { keyboardListener } from 'keyboardListener'

export class Keyboard extends React.Component {
  constructor(props) {
    super(props)

    this.handleKeyPressed = this.handleKeyPressed.bind(this)
    keyboardListener.init(this.props.keyboard)
  }

  componentWillMount() {
    keyboardListener.start(this.handleKeyPressed)
  }

  componentWillUnmount() {
    keyboardListener.stop()
  }

  handleKeyPressed(specificKeyHandler) {
    const { input, onClick } = this.props

    onClick(specificKeyHandler(input))
  }

  render() {
    const { keyboard } = this.props

    return (
      <div className="row">
        {keyboard.keysOrderedList.map(({ id, clickHandler, className }) => (
          <Button
            key={id}
            onClick={() => { this.handleKeyPressed(clickHandler)}}
            className={className}
          >
            {id}
          </Button>
        ))}
      </div>
    )
  }
}
