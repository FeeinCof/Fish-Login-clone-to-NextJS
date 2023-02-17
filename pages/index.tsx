import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
export default function Home() {
  const [isActive, setActive] = useState(false);
  const activeHandle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <Head>
        <title>Fish login clone to Nextjs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div
          className={`${styles.container} ${
            isActive && styles.right_panel_active
          }`}
        >
          <div
            className={`${styles.form_container} ${styles.register_container}`}
          >
            <form action="#">
              <h1>Register here.</h1>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Register</button>
              <span>or use your account</span>
              <div className={styles.social_container}>
                <a
                  href="https://www.facebook.com/justacoffecup"
                  className={styles.social}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebookF} width={10} />
                </a>
                <a
                  href="https://www.instagram.com/feeisme_/"
                  className={styles.social}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} width={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/feeisme/"
                  className={styles.social}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} width={16} />
                </a>
                <a
                  href="https://github.com/FeeinCof"
                  className={styles.social}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} width={16} />
                </a>
              </div>
            </form>
          </div>
          <div className={`${styles.form_container} ${styles.login_container}`}>
            <form action="#">
              <h1>Login here</h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <div className={styles.content}>
                <div className={styles.checkbox}>
                  <input type="checkbox" name="checkbox" id={styles.checkbox} />
                  <label>Remember me</label>
                </div>
                <div className={styles.pass_link}>
                  <a href="#">Forgot password</a>
                </div>
              </div>
              <button>Login</button>
              <span>or use your account</span>
              <div className={styles.social_container}>
                <a
                  href="https://www.facebook.com/justacoffecup"
                  className={styles.social}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebookF} width={10} />
                </a>
                <a
                  href="https://www.instagram.com/feeisme_/"
                  className={styles.social}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} width={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/feeisme/"
                  className={styles.social}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} width={16} />
                </a>
                <a
                  href="https://github.com/FeeinCof"
                  className={styles.social}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} width={16} />
                </a>
              </div>
            </form>
          </div>
          <div className={styles.overlay_container}>
            <div className={styles.overlay}>
              <div className={`${styles.overlay_panel} ${styles.overlay_left}`}>
                <h1 className={styles.title}>
                  Hello <br />
                  friends
                </h1>
                <p>if you have an account, login here and have fun</p>
                <button className={styles.ghost} onClick={() => activeHandle()}>
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    width="12px"
                    className={styles.login}
                  />
                  Login
                </button>
              </div>
              <div
                className={`${styles.overlay_panel} ${styles.overlay_right}`}
              >
                <h1 className={styles.title}>
                  Start your <br /> journy now
                </h1>
                <p>
                  if you don't have an account yet, join us and start your
                  journey.
                </p>
                <button className={styles.ghost} onClick={() => activeHandle()}>
                  Register
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    width="12px"
                    className={styles.register}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
