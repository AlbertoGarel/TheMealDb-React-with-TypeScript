import "./Page404.scss";
import imageError from "../../assets/img/error404.png";
import { Link } from "react-router-dom";

export default function Page404() {


  return (
    <section id="page404">
      <img src={imageError} alt="error for 404" />
      <Link className="btn btn1" to={"/"}>
        Sácame de aqui...
      </Link>
    </section>
  );
}
