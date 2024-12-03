import React from 'react'
import styles from "./styles.module.css"
import eucalipto from "../../assets/img/eucalipto.webp"
import romero from "../../assets/img/romero.webp"
import rosas from "../../assets/img/rosas.webp"
import part2 from "../../assets/img/part2.jpeg"

const Part2 = () => {
    return (
        <div className={styles.contain}>
            <div className={styles.two_image}>
                <img src={eucalipto} alt="flores1" />
                <img src={romero} alt="flores2" />
            </div>
            <div className={styles.one_image}>
                <img src={rosas} alt="flores3" />
            </div>
            <div className={styles.subposition}>
                <h3>NOSOTROS</h3>
                <h2>Estefany & Brandon</h2>
                <h4>Con la bendicion de dios y nuestros padres.</h4>
                <h3>
                    Rosa Isela Arroyo Terrazas
                    <br />
                    Edgar Jairo Navarrete Tavares
                    <br />
                    <br />
                    Hilda Manuela Delgado Arellanes
                    <br />
                    Jose Miguel Altamirano Palacios
                </h3>
                <h4>
                    Tenemos el honor de invitarte a nuestra boda
                </h4>
                <img src={part2} alt="fany&brandon" />
            </div>
        </div>
    )
}

export default Part2