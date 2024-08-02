import "antd/dist/antd.min.css";
import { Button } from "antd";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

const Navbar = ({ className = "" }) => {
  return (
    <header className={[styles.navbar, className].join(" ")}>
      <div className={styles.navbarChild} />
      <div className={styles.logoContainer}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
      </div>
      <div className={styles.pageLinks}>
        <div className={styles.pages}>
          <a className={styles.trangCh}>Trang chủ</a>
          <a className={styles.traCu}>Tra cứu</a>
          <a className={styles.hiP}>Hỏi đáp</a>
          <a className={styles.vnBnLut}>Văn bản luật</a>
          <a className={styles.dchV}>Dịch vụ</a>
        </div>
      </div>
      <div className={styles.userOptionsWrapper}>
        <div className={styles.userOptions}>
          <Button className={styles.login} type="default" href="/login">
            Đăng nhập
          </Button>
          <Button className={styles.login} type="primary" href="/register">
            Đăng ký
          </Button>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
