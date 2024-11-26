import styles from './Weather.module.css'

export function Weather(props){
    return (
        <div className={styles.container}>
            <div className={styles.weather}>
                <p>{props.city}</p>
                <p>{props.temperature} C</p>
            </div>
        </div>
    )
}