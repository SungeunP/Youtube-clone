import StaticVideoData from "./StaticVideoData"

export default (req, res) => {
  const { max } = req.query
  const videosToBeRendered = StaticVideoData.slice(0, max)

  res.statusCode = 200
  res.json({ videos: videosToBeRendered })
}