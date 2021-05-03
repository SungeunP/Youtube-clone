import StaticVideoData from "./StaticVideoData"

export default (req, res) => {
  res.statusCode = 200
  res.json({ videos: StaticVideoData })
}