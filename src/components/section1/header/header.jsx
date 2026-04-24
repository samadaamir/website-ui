import React from 'react'
import styles from './header.module.css'
const Header = () => {
  return (
    <div>
        <div className={styles.header}>
            <div className={styles.logo}>
                <h4 className={styles.heading}>Folioblox</h4>
            </div>
            <div className={styles.list}>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
              </ul>
            <div className={styles.btn}>
              <button>Get in touch <span>&#10132;</span></button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Header