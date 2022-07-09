import Image from "next/image";

import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Projeto desenvolvido durante as aulas de Next do canal <a href="https://www.youtube.com/c/MatheusBattisti" target={"_blank"} rel={"noreferrer"}>Matheus Battisti - Hora de Codar</a>. Esse projeto teve como finalidade aprimorar os conhecimentos em Next.</p>
            <Image src="/images/charizard.png" alt="Imagem do charizard" width="300px" height="300px" />
        </div>
    )

}