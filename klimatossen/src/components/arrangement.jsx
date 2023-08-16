import style from "../style/arrangement.module.scss";
import arr from "../assets/images/icon-Arrangement.png";


export function Arrangement() {
  const text = `Deltag i et af vores arrangementer og gør en forskel!

  - “Combing” (”at fjerne affald”, f.eks. beachcombing: , rense stranden for affald og elementer der ikke hører hjemme her).  Invester en dag med familien i naturen og sammen med andre.
  - Tilmeld dig eet arrangement i dit område.
  - Tag ansvar hjælp dit nærområde og os alle sammen generelt.
  - Mød nye mennesker omkring en fælles opgave.
  - Tag famillien med på en dag for naturen og vores fremtid..
  - Tilmeld dig eet af vore arrangementer, eller modtag
   information om Klimatossen!
  - Hent mere information på siden “Tilmeld Dig”.`;

  const lines = text.split("\n");

  return (
    <section className={style.arrangement}>
      <h2>DELTAG I ARRANGEMENT</h2>
      <article className={style.sections}>
        <div className={style.imageSection}>
          <img src={arr} alt="arr" />
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
