import style from "../style/CO2.module.scss";
import cloud from "../assets/images/icon-CO2.png"


export function CO2() {
  return (
    <section className={style.co2}>
      <article>
        <h2>HVAD ER CO2?</h2>
        <img src={cloud} alt="Cloud" />

        <p>
CO2 er en gasart der findes naturligt i Jordens atmosfære.

- CO2, findes naturligt i atmosfæren.
- Livet, er afhængigt af CO2 da det regulerer temperaturen på Jorden.
- CO2, dannes oftest ved at mennesker og dyr, indånder ilt, og
 udånder CO2. Planter optager CO2, og omdanner det til Ilt. Derved
	opnåes en balance i CO2 "regnskabet".

- Afbrænding f.eks. af fossile brændstoffer, udleder CO2.

- Jordens skove og verdenshavene er den største "producent" af den
 ilt, der er nødvendig, for liv på Jorden, som vi kender det.
- Mennesket er den enlige faktor der har den største indflydelse på
 CO2 -balancen på Jorden i dag!
        </p>
    <a>Læs mere</a>
      </article>
    </section>
  );
}