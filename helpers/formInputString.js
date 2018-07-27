export const insertSpaceBeforeOperator = (input) => {
  return input && !isNaN(+input[input.length - 1]) ?
    input + ' ' :
    input
}

export const insertSpaceAfterOperator = (input) => {
  return input && input[input.length - 1] !== '.' && isNaN(+input[input.length - 1]) ?
    input + ' ' :
    input
}

// TODO: add other string helpers
