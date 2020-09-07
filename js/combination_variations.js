input = 'cat'

/**
 * time: O(!n)
 * space: O(!n)
 */
function combination_variations (str) {
  const vars = []

  function recurse(chars, rest) {
    if (rest.length === 1) {
      vars.push(chars + rest)
      return
    }

    for (let i = 0; i < rest.length; i++) {
      char = rest[i]
      newChars = chars + char
      newRest = rest.slice(0, i) + rest.slice(i + 1)
      recurse(newChars, newRest)
    }
  }

  recurse('', str)

  return vars
}

res = variations(input)

console.log('output:', res)
// output: ["cat", "cta", "act", "atc", "tca", "tac"]