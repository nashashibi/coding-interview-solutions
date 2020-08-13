input = '/Users/Ruz/Documents/../Desktop/./..////./././../Nash/'


function get_shortest_path(path) {
  const pathLength = path.length
  const lastCharIndex = pathLength - 1
  let shortestPath = ''
  let tempDir
  let pathsArr = []

  for (let i = 0; i < pathLength; i++) {
    const char = path[i]
    const isLastChar = i === lastCharIndex

    if (char === '/' || isLastChar) {
      if (char !== '/') {
        tempDir += char
      }

      if (tempDir && !['..', '.'].includes(tempDir)) {
        pathsArr.push(tempDir)
      }

      if (tempDir === '..' && pathsArr.length) {
        pathsArr.pop()
      }

      tempDir = ''
    } else {
      tempDir += char
    }
  }

  const pathsArrLength = pathsArr.length

  for (i = 0; i < pathsArrLength; i++) {
    shortestPath += '/' + pathsArr[i]
  }

  return shortestPath + '/'
}



res = get_shortest_path(input)

console.log(res)
