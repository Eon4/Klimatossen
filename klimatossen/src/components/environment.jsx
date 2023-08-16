import style from "../style/enviroment.module.scss";
import climate from "../assets/images/icon-Climate.png";


export function Environment() {
  const text = `Kort om klimaet og miljøet?

  - Klima og miljø hænger sammen.
  - Klimaforandringer påvirker miljøet og omvendt.
  - Miljøet kan betragtes som en organisme, og er det vi baserer vores liv og overlevelse på, hvis vi ændrer i miljøet, har det oftest en dominoeffekt, der påvirker alle dele i miljøet.
  - Ændringer i atmosfærens CO2 og Ozonlag påvirker miljøet på hele kloden, med ændringer i temperatur og nedbør som følge.
  - Ændrede temperaturer og nedbørsmønster påvirker ikke kun kældre og infrastruktur, men også biodiversiteten som planter insekter mm.
  - Din adfærd påvirker klimaet i størrer eller mindre grad.`;

  const lines = text.split("\n");

  return (
    <section className={style.climate}>
      <h2>KLIMA OG MILJØ?</h2>
      <article className={style.sections}>
        <div className={style.imageSection}>
          <img src={climate} alt="climate" />
        </div>
        <div className={style.textSection}>
          {lines.map((line, index) => (
            <p key={index} className={index === 0 ? style.important : ''}>
              {line}
            </p>
          ))}
          <a>Læs mere</a>
        </div>
      </article>
    </section>
  );
}
