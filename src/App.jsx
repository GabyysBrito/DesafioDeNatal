import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import './globalStyle/globalStyle.scss'

export default function App(){
  return(
    <section>
      <Header/>
      <Main/>
      <Footer/>
    </section>
  )
}