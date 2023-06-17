import logo_albertogarel from "../../assets/img/Logo_AlbertoGarel.png";
import logo_themealdb from '../../assets/img/logo-small.png'
import "./Footer.scss";

export default function Footer() {
  return (
    <section className="footer">
      <div id="footer-left">
        <h3>Created by Albertogarel 2023</h3>
        <img src={logo_albertogarel} alt="logo de Albertogarel" />
      </div>
      <div id="footer-right">
        <img src={logo_themealdb} alt="logo de TheMealDb" />
      </div>
    </section>
  );
}
