import style from "../style/footer.module.scss";


export function Footer() {
  return (
    <footer>
      <div>
      <section className={style.npo}>
        <h5>KlimaTossen NPO</h5>
        <p>
          Vesterbrogade 92 <br /> 9000 Aalborg <br /> info@klima-tossen.dk{" "}
          <br /> 9922 3344 (Åben man - fre: 08.00 - 16.00)
        </p>
        <h5>SAMARBEJDSPARTNERE:</h5>
        <p>
          <ul>
            <li>
              <a href="https://www.dn.dk/">https://www.dn.dk/</a>
            </li>
            <li>
              <a href="http://www.miljoeportal.dk">
                http://www.miljoeportal.dk
              </a>
            </li>
          </ul>
        </p>
        <h1>Klima<span>tossen</span></h1>
      </section>
      <section className={style.tilmeld}>
        <h5>Ja tak! Jeg vil gerne hører mere.</h5>
        <form>
          <input type="text" placeholder="Fulde navn" />
          <input type="text" placeholder="Hjem by" />
          <input type="email" placeholder="Email adresse" />
          <input type="tel" placeholder="Telefon nummer" />
          <div>
          <label htmlFor="">Få en samtale med Klimatossen </label>
          <input className={style.checkbox} type="checkbox" />
          <label htmlFor="">Modtag Nyhedsbrev</label>
          <input className={style.checkbox} type="checkbox" />
          </div>
          <input className={style.send}  type="Submit" value="Send" />
        </form>
      </section>
      </div>
    </footer>
  );
}