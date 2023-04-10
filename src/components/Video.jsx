import styles from '../styles/video.module.css';

const Video = ({ video }) => {
  return (
    <div className={styles.container}>
      <video src={video.src} controls width='350px' height='250px' autoPlay muted loop></video>
    </div>
  )
}

export default Video