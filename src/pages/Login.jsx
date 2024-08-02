import LoginForm from "../components/RegisterForm";
import styles from "./Login.module.css";
// import LoginForm from './../components/LoginForm';

const Login = () => {
  return (
    <div className={styles.login}>
      <main className={styles.loginpage}>
        <div className={styles.blobContainer}>
          <img className={styles.blobIcon} alt="" src="/blob.svg" />
          <img
            className={styles.blobIcon1}
            loading="lazy"
            alt=""
            src="/blobsvector-1.svg"
          />
          <img className={styles.blobIcon2} alt="" src="/blobsvector-2.svg" />
          <img
            className={styles.untitled11Icon}
            alt=""
            src="/untitled1-1@2x.png"
          />
        </div>
        <LoginForm />
      </main>
    </div>
  );
};

export default Login;
