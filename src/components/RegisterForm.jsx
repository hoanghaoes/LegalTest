import "antd/dist/antd.min.css";
import { Input } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import styles from "./RegisterForm.module.css";
import Register from './../pages/Register';

const RegisterForm = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.contentframe} />
      <div className={styles.content1}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Đăng ký tài khoản</div>
        </div>
        <div className={styles.fullnameInput}>
          <div className={styles.fieldLabels}>
            <div className={styles.hVTn}>Họ và tên</div>
          </div>
          <Input
            className={styles.nameinp}
            name="name"
            placeholder="Nhập họ tên ở đây"
            bordered={true}
            prefix={<UserOutlined />}
          />
        </div>
        <div className={styles.fullnameInput}>
          <div className={styles.fieldLabels}>
            <div className={styles.email}>Email</div>
          </div>
          <Input
            className={styles.nameinp}
            name="email"
            placeholder="Nhập email ở đây"
            type="email"
            bordered={true}
            prefix={<MailOutlined />}
          />
        </div>
        <div className={styles.passwordInput}>
          <div className={styles.mtKhuWrapper}>
            <div className={styles.mtKhu}>Mật khẩu</div>
          </div>
          <Input.Password
            className={styles.nameinp}
            name="password"
            placeholder="Nhập mật khẩu ở đây"
            bordered={true}
            prefix={<LockOutlined />}
          />
        </div>
        <div className={styles.signupActionWrapper}>
          <div className={styles.signupAction}>
            <div className={styles.signupButton}>
              <button className={styles.buttoncreateacc}>
                <div className={styles.buttonframe} />
                <div className={styles.ngK}>Đăng ký</div>
              </button>
            </div>
            <a className={styles.cTiKhonContainer}>
              <span>{`Đã có tài khoản? `}</span>
              <span className={styles.ngNhp}>Đăng nhập</span>
            </a>
          </div>
        </div>
        <div className={styles.dividerContainerWrapper}>
          <div className={styles.dividerContainer}>
            <div className={styles.orElement}>
              <div className={styles.or}>- OR -</div>
            </div>
            <button className={styles.buttongoogle}>
              <img className={styles.googleIcon} alt="" src="/google@2x.png" />
              <div className={styles.googleLabel}>
                <div className={styles.singUpWith}>Sing up with Google</div>
              </div>
              <div className={styles.buttonframe1} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

RegisterForm.propTypes = {
  className: PropTypes.string,
};

export default RegisterForm;
