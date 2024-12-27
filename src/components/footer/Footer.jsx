import iconeLinkedln from '../../assets/iconeLinkedln.png'
import iconeInstagram from '../../assets/iconeInstagram.png'
import iconeGithub from '../../assets/iconeGithub.png'
import imagensPresentes from '../../assets/imagensPresentes.png'
import s from '../footer/footer.module.scss' 

export default function Footer(){
    return(
        <section>
            <footer>

                <nav className={s.secaoNav}>
                    <ul>
                        <li><a href="#"><img className={s.cardIcones} src={iconeLinkedln} alt="Icone da rede social do Linkedln" /></a></li>
                        <li><a href="#"><img className={s.cardIcones} src={iconeInstagram} alt="Icone da rede social do Instagram" /></a></li>
                        <li><a href="#"><img className={s.cardIcones} src={iconeGithub} alt="Icone da rede social do Github" /></a></li>
                    </ul>
                </nav>

                <section className={s.DireitosAutorais}>
                    <p>Gabrielle Oliveira</p>
                    <p>Fernanda Corrêa</p>
                    <p>João Pedro Belo</p>
                    <p>Layout criado para fins natalistícos na escola vai na web</p>
                </section>

                <section className={s.Presentes}>
                    <img src={imagensPresentes} alt="Uma imagem mostrando 4 presentes" />
                </section>

            </footer>
        </section>
    )
}