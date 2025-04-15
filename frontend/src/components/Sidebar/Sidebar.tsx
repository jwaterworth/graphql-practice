import styles from "./Sidebar.module.scss";


export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h1>Sidebar</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  );
}
