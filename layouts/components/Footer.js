import React from 'react'
import styles from '../../styles/index.module.css'


export default function Footer() {
    return (
        <footer className={styles.footer}>
          <span className="text-white">Powered by</span>{' '}
          <img src="/vion_logo.png" alt="Vion Logo" className="h-50" />
        </footer>
    )
}
