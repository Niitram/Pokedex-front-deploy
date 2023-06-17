import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import scrollToTop from "./scrollToTop";

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.containerButtons}>
          <Link className={styles.button} to={`/`}>
            Home
          </Link>
          <Link className={styles.button} to={`/createPokemon`}>
            Create Pokemon
          </Link>
        </div>
        <div className={styles.containerInfo}>
          <h3>Created by: Marto</h3>
        </div>
        <div className={styles.containerScroll}>
          <button
            className={styles.buttonScroll}
            onClick={scrollToTop}
          ></button>
        </div>
      </div>
    );
  }
}

export default Footer;
