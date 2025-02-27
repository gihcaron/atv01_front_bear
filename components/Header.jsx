import styles from '../styles/Header.module.css'

export default function Header(){      
    return (
        <div className={styles.header}>
        <h1 className={styles.title}>Share bear</h1>
        {/* <nav className={styles.nav}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav> */}
        </div>

    );
}