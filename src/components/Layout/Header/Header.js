import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>Logo Image</div>

        <nav className={styles.navigation}>
          <ul>
            <li>route 1</li>
            <li>route 2</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
