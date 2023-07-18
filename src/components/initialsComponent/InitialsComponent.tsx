import { BYFIRSTLETTER } from "../../const/const";
import { RandomMeal } from "../../types/request";
import "./InitialsComponent.scss";

const letters: string[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

interface InitialsComponentProps {
  GetNoResultLetterSelected: any;
}
export default function InitialsComponent({
  GetNoResultLetterSelected,
}: InitialsComponentProps) {
  const handlerGetLetter = async (value: string) => {
    try {
      const request: Response = await fetch(BYFIRSTLETTER + value);
      const json: RandomMeal = await request.json();
      const meals = json?.meals;

      GetNoResultLetterSelected(await meals);
    } catch (err) {
      console.log("error desde InitialsComponent", err);
    }
  };

  return (
    <section className="letters">
      {letters.map((i) => {
        return (
          <article key={i} onClick={() => handlerGetLetter(i)}>
            <p>{i}</p>
          </article>
        );
      })}
    </section>
  );
}
