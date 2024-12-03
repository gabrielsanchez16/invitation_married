import React from 'react'
import styles from "./styles.module.css"
import eucalipto from "../../assets/img/eucalipto.webp"
import romero from "../../assets/img/romero.webp"
import ramoLateral from "../../assets/img/ramoLateral.png"
import part4 from "../../assets/img/part4.webp"
import { GiChurch } from "react-icons/gi";
import { GiLinkedRings } from "react-icons/gi";


const Part4 = () => {

    const navigate = (link)=>{
        window.open(link, '_blank');
    }


    return (
        <div className={styles.contain}>
            <div className={styles.two_image}>
                <img src={eucalipto} alt="flores1" />
                <img src={romero} alt="flores2" />
            </div>
            <div className={styles.one_image}>
                <img src={ramoLateral} alt="flores3" />
            </div>
            <div className={styles.subposition}>
                <div className={styles.box}>
                    <div className={styles.icons}>
                        <GiChurch fontSize={30} color='rgb(170 96 0 / 68%)' />
                        <GiLinkedRings fontSize={30} color='rgb(170 96 0 / 68%)' />
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.letters}>
                        <h4>
                            Misa
                            <br />
                            18 horas
                        </h4>
                        <h4>
                            Recepcion
                            <br />
                            20 horas
                        </h4>
                    </div>
                </div>
                <h2>Ceremonia religiosa</h2>
                <h3>
                    Parroquia San José
                    <br />
                    22 de Febrero 2025
                </h3>

                <button onClick={()=>{
                    navigate("https://maps.app.goo.gl/ejPf6TqZg6xGYWkT6")
                }}>
                    Ubicacion iglesia
                </button>
                <img src={part4} alt="flor" />
                <h2>Recepcion</h2>
                <h3>
                    Salón Premier Plaza Doroteo
                    <br />
                    22 de Febrero 2025
                </h3>
                <button onClick={()=>{
                    navigate("https://maps.app.goo.gl/o8Fb3iDUhLpPV1EE6")
                }}>
                   Ubicacion salon
                </button>
                <button onClick={()=>{
                    navigate("https://w.app/Xzgbn9")
                }}>
                    Confirmar asistencia
                </button>
            </div>
        </div>
    )
}

export default Part4