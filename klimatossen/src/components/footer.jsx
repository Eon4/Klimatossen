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
        <h2>SAMARBEJDSPARTNERE:</h2>
        <p>
https://www.dn.dk/
http://www.miljoeportal.dk
        </p>
        <h1>KLIMATOSSEN</h1>
      </article>
      <article>
        <h2>Ja tak! Jeg vil gerne høre mere.</h2>
      </article>
      <form action="Thanks.html" novalidate onsubmit="return validate(this);" class="myform">
        <fieldset id="signup">
          {/* <legend>Signup Form</legend> */}
            <input type="text" id="fname" name="fname" placeholder="Fulde navn" required />

            <input type="text" id="city" name="city" placeholder="Hjem by" required />

            <input type="email" id="email" name="email" placeholder="Email Address" required />

            <input type="checkbox" id="talk" name="talk" value="letstalk"/>
            <label for="talk">Få en samtale med Klimatossen</label>

            
            <input type="checkbox" id="news" name="news" value="getnews"/>
            <label for="talk">Modtag Nyhedsbrev</label>

            <input type="tel" id="phone" name="phone" placeholder="Telefon nummer" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
        
            <input type="submit" value="Submit" />
      </fieldset>
      </form>
    </footer>
  );
}
