import imagemPapaiNoel from '../../assets/imagemPapaiNoel.png'
import globoDeNeve from '../../assets/globoDeNeve.png'
import imagemDeNatal1 from '../../assets/imagemDeNatal1.png'
import imagemDeNatal2 from '../../assets/imagemDeNatal2.png'
import imagemDeNatal3 from '../../assets/imagemDeNatal3.png'
import s from '../main/main.module.scss'

export default function Main(){
    return(
        <section>

            <main>
                <section className={s.fundoImagem}>
                    <img src={imagemPapaiNoel} alt="Uma imagem do papai noel enfeitando o presente e dois duendes ajudando" />
                </section>

                <section className={s.secaoOrigem}>
                    <img src={globoDeNeve} alt="Imagem de um globo de neve dentro do globo tem uma árvore de natal" />
                    
                    <p>A origem do globo de neve é incerta, mas acredita-se que tenha surgido na Europa no século XIX, tornando-se um símbolo de magia, afeto e encantamento, especialmente no Natal, trazendo um toque de nostalgia e maravilha para as celebrações e encantando gerações ao redor do mundo.</p>
                </section>

                <section className={s.secaoImagens}>

                        <img className={s.cardImagem} src={imagemDeNatal1} alt="Imagem de natal com casas coloridas e em frente a casa 3 árvores com iluminação de natal" />
                        <img className={s.cardImagem} src={imagemDeNatal2} alt="Imagem de natal de uma rua bem iluminada e no lado direito uma árvore de natal bem grande enfeitada com uma estrela" />
                        <img className={s.cardImagem} src={imagemDeNatal3} alt="Imagem de natal mostrando uma rio e ao redor árvores com iluminação" />
                </section>

            </main>

        </section>
    )
}