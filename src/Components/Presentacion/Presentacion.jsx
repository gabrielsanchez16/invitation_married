import React from 'react'
import styles from "./styles.module.css"
import atardecer from "../../assets/img/mainImg.jpeg"

const Presentacion = () => {
  return (
    <div className={styles.contain}>
        <img src={atardecer} alt="atardecer" />
        <div className={styles.text_flotante}>
            <h2>Hoy empieza
                <br />
                la mejor historia:
                <br />
                <span>la nuestra</span>
            </h2>
        </div>
    </div>
  )
}

export default Presentacion