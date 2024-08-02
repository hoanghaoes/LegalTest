import RegisterForm from "../components/RegisterForm";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.register}>
      <main className={styles.loginpage}>
        <div className={styles.blobsvectorParent}>
          <img className={styles.blobsvectorIcon} alt="" src="/blob.svg" />
          <img
            className={styles.blobsvectorIcon1}
            loading="lazy"
            alt=""
            src="/blobsvector-1.svg"
          />
          <img
            className={styles.diseoGrficoIcon}
            alt=""
            src="/blobsvector-2.svg"
          />
          <img
            className={styles.untitled11Icon}
            alt=""
            src="/untitled1-1@2x.png"
          />
        </div>
        <RegisterForm />
      </main>
    </div>
  );
};

export default Register;
