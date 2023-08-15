import style from '../style/header.module.scss'
import HeaderImg from  '../assets/images/Bg-Hero-Blue.png'

export function Header(){
    return (
        <header>
            <h1 className={style.title}>Klima<span>tossen</span></h1>
            <img className={style.Headerimg} src={HeaderImg} alt="header" />
            <h2 className={style.smalltitle}>KLIMA-TOSSEN.DK</h2>
            <p className={style.headertext}>"Det er rigtigt, at vi hver især kun kan bidrage lidt
til den samlede løsning"

"Lige så rigtigt er det, at vi slet ikke kan nå målet,
uden at hver især bidrager en smule til det"</p>
        </header>
    )
}