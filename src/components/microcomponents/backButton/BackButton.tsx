import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import "./BackButton.scss";

type BackButtonProps = {
  prevPage: string;
};
export default function BackButton({ prevPage }: BackButtonProps) {
  return (
    <section id="back-container">
      <Link to={prevPage}>
        <FontAwesomeIcon icon={faBackward} />
        volver
      </Link>
    </section>
  );
}
