import {
  insertSpaceBeforeOperator,
  insertSpaceAfterOperator
} from 'formInputString'

export const keyboardBuilder = () => {
  const keys = {
    allClear: { 
      id: 'AC',
      className: 'col-3 button',
      clickHandler: () => ({
        input: '',
        nextChar: ''
      })
    },
    clearEntry: { 
      id: 'CE',
      className: 'col-6 button',
      clickHandler: input => ({
        input: input.substr(0, input.length - 1),
        nextChar: ''
      })
    },
    divide: {
      id: '/',
      className: 'col-3 button salmon',
      clickHandler: input => ({
        input: insertSpaceBeforeOperator(input),
        nextChar: '/'
      })
    },
    seven: { 
      id: '7',
      className: 'col-3 button',
      clickHandler: input => ({
        input: insertSpaceAfterOperator(input),
        nextChar: '7'
      })
    },
    eight: {
      id: '8',
      className: 'col-3 button',
      clickHandler: input => ({
        input: insertSpaceAfterOperator(input),
        nextChar: '8'
      })
    },
    nine: {
      id: '9',
      className: 'col-3 button',
      clickHandler: input => ({
        input: insertSpaceAfterOperator(input),
        nextChar: '9'
      })
    },
    mul: { 
      id: '*',
      className: 'col-3 button salmon',
      clickHandler: input => ({
        input: insertSpaceBeforeOperator(input),
        nextChar: '*'
      })
    },
    four: { 
      id: '4',
      className: 'col-3 button',
      clickHandler: input => ({
        input: insertSpaceAfterOperator(input),
        nextChar: '4'
      })
    },
    five: { 
      id: '5',
      className: 'col-3 button',
      clickHandler: input => ({
        input: insertSpaceAfterOperator(input),
        nextChar: '5'
      })
    },
    six: { 
      id: '6',
      className: 'col-3 button',
      clickHandler: input => ({
        input: insertSpaceAfterOperator(input),
        nextChar: '6'
      })
    },
    sub: { 
      id: '-',
      className: 'col-3 button salmon',
      clickHandler: input => ({
        input: insertSpaceBeforeOperator(input),
        nextChar: '-'
      })
    },
    one: { 
      id: '1',
      className: 'col-3 button',
      clickHandler: input => ({
        input: insertSpaceAfterOperator(input),
        nextChar: '1'
      })
    },
    two: { 
      id: '2',
      className: 'col-3 button',
      clickHandler: input => ({
        input: insertSpaceAfterOperator(input),
        nextChar: '2'
      })
    },
    three: { 
      id: '3',
      className: 'col-3 button',
      clickHandler: input => ({
        input: insertSpaceAfterOperator(input),
        nextChar: '3'
      })
    },
    add: { 
      id: '+',
      className: 'col-3 button salmon',
      clickHandler: input => ({
        input: insertSpaceBeforeOperator(input),
        nextChar: '+'
      })
    },
    zero: { 
      id: '0',
      className: 'col-6 button',
      clickHandler: input => ({
        input: insertSpaceAfterOperator(input),
        nextChar: '0'
      })
    },
    dot: {
      id: '.',
      className: 'col-3 button',
      clickHandler: input => ({
        input: input,
        nextChar: '.'
      })
    },
    equal: {
      id: '=',
      className: 'col-3 button salmon',
      clickHandler: input => {
        try {
          return {
            input: input && math.eval(input).toString(),
            nextChar: '',
            clearBeforeNextChar: true
          }
        } catch (error) {
          console.log(error)
        }
        return { input, nextChar: '' }
      }
    }
  }
  
  const keysOrderedList = [
    keys.allClear,
    keys.clearEntry,
    keys.divide,
    keys.seven,
    keys.eight,
    keys.nine,
    keys.mul,
    keys.four,
    keys.five,
    keys.six,
    keys.sub,
    keys.one,
    keys.two,
    keys.three,
    keys.add,
    keys.zero,
    keys.dot,
    keys.equal
  ]
  
  const keyMap = {
    '0': keys.zero,
    '1': keys.one,
    '2': keys.two,
    '3': keys.three,
    '4': keys.four,
    '5': keys.five,
    '6': keys.six,
    '7': keys.seven,
    '8': keys.eight,
    '.': keys.dot,
    'Backspace': keys.clearEntry,
    '/': keys.divide,
    '*': keys.mul,
    '-': keys.sub,
    '+': keys.add,
    'Enter': keys.equal,
  }
  
  return {
    keys,
    keyMap,
    keysOrderedList
  }
}
