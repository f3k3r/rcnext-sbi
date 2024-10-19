// import Image from 'next/image';
import styles from "../page.module.css"
export default function Header() {
  return (
  <div className={`${styles.TopHeader} logo text-center`}>
    <img alt="men" src="/assets/kk.png" />
  </div>
  );
}
