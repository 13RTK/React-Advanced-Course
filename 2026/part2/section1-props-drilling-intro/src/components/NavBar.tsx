import styles from './NavBar.module.css';

function NavBar({
  counter,
  setCurrentComponent,
}: {
  counter: number;
  setCurrentComponent: (component: string) => void;
}) {
  return (
    <nav className={styles.nav}>
      <a href="#" onClick={() => setCurrentComponent('Home')}>
        Home
      </a>
      <a href="#" onClick={() => setCurrentComponent('Order')}>
        Order
      </a>
      <p>Counter {counter}</p>
    </nav>
  );
}

export default NavBar;
