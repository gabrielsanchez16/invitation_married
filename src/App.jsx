import { useEffect, useRef } from "react";
import Presentacion from "./Components/Presentacion/Presentacion"
import audioFile from "./music/EdPerfect.mp3";
import { FaPlayCircle } from "react-icons/fa";
import styles from "./styles.module.css"
import Part2 from "./Components/part2/Part2";
import Part3 from "./Components/part3/Part3";
import Part4 from "./Components/part4/Part4";
import Part5 from "./Components/part5/Part5";

function App() {
  const audioRef = useRef(new Audio(audioFile));

  const askForPermission = () => {
    const userConsent = window.confirm("¿Deseas reproducir música en esta página?");
    if (userConsent) {
      audioRef.current.play()
        .then(() => console.log("Reproducción iniciada correctamente."))
        .catch((error) => console.log("Error en la reproducción:", error));
    } else {
      console.log("El usuario rechazó reproducir música.");
    }
  };


  return (
    <>
      <div style={{
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        <Presentacion />
        <Part2/>
        <Part3/>
        <Part4/>
        <Part5/>
        <button
          onClick={askForPermission}
          className={styles.button}
        >
          <FaPlayCircle fontSize={30} color="#ffff"/>
        </button>
      </div>

    </>
  )
}

export default App
