import "antd/dist/antd.min.css";
import { Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import styles from "./Content.module.css";

const LoginForm = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.contentframe} />
      <div className={styles.content1}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Đăng nhập tài khoản</div>
        </div>
        <div className={styles.inputFields}>
          <div className={styles.emailInput}>
            <div className={styles.labelWrappers}>
              <div className={styles.email}>Email</div>
            </div>
            <Input
              className={styles.emailinp}
              name="email"
              placeholder="Nhập email ở đây"
              type="email"
              bordered={true}
              prefix={<MailOutlined />}
            />
          </div>
        </div>
        <div className={styles.inputFields1}>
          <div className={styles.emailInput}>
            <div className={styles.mtKhuWrapper}>
              <div className={styles.mtKhu}>Mật khẩu</div>
            </div>
            <Input.Password
              className={styles.emailinp}
              name="password"
              placeholder="Nhập mật khẩu ở đây"
              bordered={true}
              prefix={<LockOutlined />}
            />
          </div>
        </div>
        <div className={styles.loginButtonContainer}>
          <div className={styles.loginButtonWrapper}>
            <div className={styles.buttoncreateaccWrapper}>
              <button className={styles.buttoncreateacc}>
                <div className={styles.buttonframe} />
                <div className={styles.ngNhp}>Đăng nhập</div>
              </button>
            </div>
            <a className={styles.chaCTiContainer}>
              <span>{`Chưa có tài khoản? `}</span>
              <span className={styles.ngK}>Đăng Ký</span>
            </a>
          </div>
        </div>
        <div className={styles.googleLoginWrapperWrapper}>
          <div className={styles.googleLoginWrapper}>
            <div className={styles.orWrapper}>
              <div className={styles.or}>- OR -</div>
            </div>
            <button className={styles.buttongoogle}>
              <img className={styles.googleIcon} alt="" src="/google@2x.png" />
              <div className={styles.singInWithGoogleWrapper}>
                <div className={styles.singInWith}>Sing in with Google</div>
              </div>
              <div className={styles.buttonframe1} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default LoginForm;
