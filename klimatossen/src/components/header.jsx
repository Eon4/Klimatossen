import style from '../style/header.module.scss'
// import HeaderImg from  '../assets/images/header.jpg'

export function Header(){
    return (
        <header>
            <h1 className={style.leolov}>Header here!</h1>
            <p className={style.title}>Undertitle here</p>
            {/* <img className={style.Headerimg} src={HeaderImg} alt="header" /> */}

        </header>
    )
}