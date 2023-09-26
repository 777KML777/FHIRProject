import styles from './Avaliacoes.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Avaliacoes() {
    return (
       <div className={styles.container}>
       <FontAwesomeIcon icon={faStar} className={styles.icone}/>
       <FontAwesomeIcon icon={faStar} className={styles.icone}/>
       <FontAwesomeIcon icon={faStar} className={styles.icone}/>
       <FontAwesomeIcon icon={faStar} className={styles.icone}/>
       <FontAwesomeIcon icon={faStar} className={styles.icone}/>
       </div>
    )
}

export default Avaliacoes