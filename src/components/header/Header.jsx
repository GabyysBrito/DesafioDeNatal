import logoArvoreNatal from '../../assets/logoArvoreNatal.png'
import s from '../header/header.module.scss'

export default function Header(){
    return(
        <section>
            
            <header>

                <section className={s.secaoLogo}>
                    <img src={logoArvoreNatal} alt="Uma logo de uma árvore de natal" />
                    <h1>Feliz Natal!!!!</h1>
                </section>
                <nav className={s.secaoNav}>
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Curiosidades</a></li>
                        <li><a href="#">Galeria</a></li>
                    </ul>
                </nav>
            </header>

        </section>
    )
}