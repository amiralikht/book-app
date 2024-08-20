
import styles from './Layout.module.css';
function Layout({children}) {
  return (
    <>
        <header className={styles.header}>
            <h1>Book App</h1>
            <p>
                <a href="https://ciphertek.com">CipherTek</a> | Amirali
            </p>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Developed by Amirali with ❤️</p>
        </footer>
    </>
  )
}

export default Layout