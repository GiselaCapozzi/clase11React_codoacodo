import styles from '../styles/audio.module.css';

const Audio = ({ audio }) => {
  
  return (
    <div>
      <h5 className={styles.titulo}>{audio.titulo}</h5>
      <audio className={styles.audio} controls src={audio.src}></audio>
    </div>
  )
}

export default Audio