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

export default (req, res) => {
  const randomNumbers = getRandomNumber(0, StaticVideoData.length-1, 16)
  console.log('randomNumbers: ', randomNumbers)
  const videos = randomNumbers.map( randomNumber => StaticVideoData[randomNumber])

  res.statusCode = 200
  res.json({ videos: videos })
}