import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import styles from './Home.module.scss'

export function Home () {
    return (    
        <div className={styles.home}>
            <div className={styles.textContainer}>
                <p>Seja bem vindo ao</p>
                <div className={styles.margin}></div>
                <Logo />
                <div className={styles.margin}></div>
                <Button title="Entrar" />
            </div>
            <img src="./src/assets/img/home-img.svg" alt="home-image" />
        </div>
    )
}