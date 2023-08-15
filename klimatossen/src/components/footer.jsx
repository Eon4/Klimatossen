import style from "../style/footer.module.scss";
// import iconface from '../assets/images/facelogo.svg';
// import iconlinked from '../assets/images/linkedinlogo.svg';



export function Footer() {
  return (
    <footer className={style.autoFlow}>
      <article>
        <h2>KlimaTossen NPO</h2>
        <p>Find os her:</p>
        <p>
        Vesterbrogade 92
9000 Aalborg
info@klima-tossen.dk
9922 3344 (Åben man - fre: 08.00 - 16.00)
        </p>
      </article>
      <article>
        <h2>Kontakt</h2>
        <p>Kontakt os her:</p>
        <p>
          email@mail.dk <br />
          Tlf: 0192 3023
        </p>
      </article>
      <article>
        <h2>Politik</h2>
        <p>Vores politikker:</p>
        <p>
          <a href="#">Privatlivspolitk</a>
          <a href="#">Cookiepolitik</a>
          <a href="#">Generalle betingelse</a>
        </p>
      </article>
      <article>
        <h2>Sociale medier</h2>
        {/* <img className={style.iconfacebook} src={iconface} alt="Logo/link to Facebook" />
        <img className={style.iconlinkedin} src={iconlinked} alt="Logo/link to LinkedIn" /> */}
      </article>
    </footer>
  );
}
