import logo from "../../assets/img/logo-small.png";
import './ErrorComponent.scss';

interface ErrorComponentProps {
  error: string;
  site: string
}
export default function ErrorComponent({ error, site }: ErrorComponentProps) {
  return (
    <div id="errorcontainer">
      <img src={logo} alt="TheMealDb logo" />
      <p>{error} in {site}</p>
    </div>
  );
}

