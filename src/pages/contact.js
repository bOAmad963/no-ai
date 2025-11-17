import Header from "../components/header";
import style from "../styles/contactStyle.module.css";

function Contact() {
  return (
    <div>
      <Header />
      <div className={style.aboutUs}>
        <h2>-About us</h2>
        <p>
          We are a team that is intrest in games filed so we desided to create
          this site, wich serve the perpose of having you charge any game you
          want that is becous some countrys do not sopport any payment method
          such as Syria and Tonis and much more. <br />
          If your country dose not support any payment method this is your right
          direction!
        </p>
      </div>{" "}
      <br />
      <div>
        <h2>-Why chose us</h2>
        <ul>
          <li>Support many payment methods</li>
          <li>24/7 Customer support in case of any problem</li>
          <li>Orders are dileverd in less than 24 houors</li>
          <li>
            Trust and transperety, We are allwas ready to tolk with our clints!
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
