import React from 'react';
import styles from '../styles/Card.module.css';

export default function Card({ title, text }) {
    return (
        <div className={styles.box}>
            <h1 className={styles.box_text}>{title}</h1>
            <p className={styles.box_paragraph}>{text}</p>
        </div>
    );
}