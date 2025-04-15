import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a>Terms &amp; Conditions</a>|<a>Privacy Policy</a>
    </div>
  );
}
