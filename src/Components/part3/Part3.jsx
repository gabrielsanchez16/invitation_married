import React from 'react'
import styles from "./styles.module.css"
import esquinera1 from "../../assets/img/esquineraRosa.webp"
import esquinera2 from "../../assets/img/esquinera2.png"
import part1 from "../../assets/img/part3_1.jpeg"
import part2 from "../../assets/img/part3_2.jpeg"
import part3 from "../../assets/img/part3_3.jpg"
import part4 from "../../assets/img/part3_4.jpeg"


const Part3 = () => {
    return (
        <div className={styles.contain}>
            <div className={styles.two_image}>
                <img src={esquinera1} alt="flores2" />
            </div>
            <div className={styles.one_image}>
                <img src={esquinera2} alt="flores3" />
            </div>
            <div className={styles.subposition}>
                <h2>Nosotros</h2>
                <div className={styles.first_div}>
                    <img src={part1} alt="fany&brandon" />
                    <img src={part2} alt="fany&brandon" />
                </div>
                <div className={styles.second_div}>
                    <img src={part4} alt="fany&brandon" />
                    <img src={part3} alt="fany&brandon" />
                    
                </div>
            </div>
        </div>
    )
}

export default Part3