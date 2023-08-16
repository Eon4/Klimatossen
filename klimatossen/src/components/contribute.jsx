import style from "../style/contribute.module.scss";
import give from "../assets/images/icon-Checklist.png";


export function Contribute() {
  const text = `Hvordan belaster du miljøet mindst muligt i dagligdagen?

- Dit forbrug overordnet herunder din produktion af affald, bidrager til udledning af CO2
- Fødevareproduktion har stor indflydelse på CO2 balancen, tænk over
 dit valg i dagligdagen.
- Din bolig og den måde du har indrettet dig påvirker miljøet.
- Jordens skove og verdenshavene er den største "producent" af den
 ilt, der er nødvendig, for liv på Jorden, som vi kender det.
- Mennesket er den enlige faktor der har den største indflydelse på
 CO2 -balancen på Jorden i dag!
	- Du kan påvirke CO2 balancen, både ved at ændre små ting i din
 hverdag, eller ved aktivt deltage i kampen for et bedre miljø.
`;

  const lines = text.split("\n");

  return (
    <section className={style.contribute}>
      <h2>HVORDAN KAN JEG BIDRAGE?</h2>
      <article className={style.sections}>
        <div className={style.imageSection}>
          <img src={give} alt="give" />
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
