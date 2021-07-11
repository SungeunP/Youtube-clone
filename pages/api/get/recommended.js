import StaticVideoData from "./StaticVideoData"

const getRandomNumber = (min, max, count) => {

  if (typeof count === 'number') {
    const result = []
    for ( let index = 0 ; index < count ; index++ ) {
      const randomValue = Math.floor(Math.random() * (max - min) + min)
      result.push(randomValue)
    }
    return result
  }
  return randomValue
}

const DEFAULT_MAX_COUNT = 30
export default (req, res) => {
  const { query } = req
  let requestedMaxCount = null
  if (query) {
    requestedMaxCount = query.max
  }

  const isMaxCountRequested = requestedMaxCount || typeof requestedMaxCount === 'number'
  let usedMaxCount = DEFAULT_MAX_COUNT
  if (isMaxCountRequested) {
    const parsedRequestedMaxCount = parseInt(requestedMaxCount)
    if (typeof parsedRequestedMaxCount !== 'number') {
      res.statusCode = 403
      res.json({message: "Invalid paramter 'max' (Not number)"})
    }
    usedMaxCount = parsedRequestedMaxCount
  }

  const randomNumbers = getRandomNumber(0, StaticVideoData.length-1, usedMaxCount)
  const videos = randomNumbers.map( randomNumber => StaticVideoData[randomNumber])

  res.statusCode = 200
  res.json({ videos: videos })
}