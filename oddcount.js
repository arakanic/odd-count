// This function returns the first integer which appears an odd number of times from the given array A.
function findOdd(A) {
  const countNs = {}
  A.forEach(n => {
    countNs[n] ? countNs[n]++ : countNs[n] = 1
  })
  for (let count in countNs) {
    if (countNs[count] % 2 === 1) {
      return parseInt(count)
    }
  }
}