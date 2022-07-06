import ReactPlayer from 'react-player'
import './index.css'

const VideoList = props => {
  const {videoDetails, isActive, onclickPlayId} = props
  const {title, URL} = videoDetails
  const isTrue = isActive ? "happy" : "sad"
  const onclickSelected = () => {
    onclickPlayId(URL)
  }
  return (
    <li className="items">
      <div className="videoItem">
        <ReactPlayer url={URL} onClick={onclickSelected} width={275} height={120}/>
      </div>
      <h1 className="title">{title}</h1>
    </li>
  )
}
export default VideoList