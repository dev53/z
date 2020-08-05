function distance (p1, p2, cb) { // mock fun
  console.log(`requesting distance for ${p1},${p2}`)
  setTimeout(() => {
    cb(null, { p1, p2 })
  }, 5000)
}

const distancePromisified = function (p1, p2) {
  return new Promise((resolve, reject) => {
    distance(p1, p2, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

function distanceHandlerCreator (limit = 10) {
  const requestsWaiting = []
  let concurrents = 0

  return async (p1, p2, cb) => {
    async function processRequest (p1, p2, cb) {
      try {
        concurrents++
        const response = await distancePromisified(p1, p2)
        cb(null, response)
      } catch (error) {
        cb(error)
      }
      concurrents--
      const next = requestsWaiting.shift()
      if (next) {
        processRequest(next.p1, next.p2, next.cb)
      }
    }

    if (concurrents >= limit) {
      requestsWaiting.push({ p1, p2, cb })
    } else {
      processRequest(p1, p2, cb)
    }
  }
}

const distanceHandler = distanceHandlerCreator(3)
/* eslint-disable-next-line */
const testCallback = (err, data) => console.log(`${JSON.stringify(data)} done`)

distanceHandler(1, 2, testCallback)
distanceHandler(2, 2, testCallback)
distanceHandler(3, 2, testCallback)
distanceHandler(4, 2, testCallback)
distanceHandler(5, 2, testCallback)
distanceHandler(6, 2, testCallback)
distanceHandler(7, 2, testCallback)
distanceHandler(8, 2, testCallback)
distanceHandler(9, 2, testCallback)
distanceHandler(10, 2, testCallback)
distanceHandler(11, 2, testCallback)
