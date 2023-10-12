import { useState } from 'react'
import  styles from './Banner.module.css';

function Banner() {
    return (
    <div className={`${styles.background}`}>
      <h1>Live with Confidence</h1>
      <p>José Mourinho brings confidence to pan-African Sanlam campaign.</p>
      <button className={`${styles.viewProject}`}>
        View project
      </button>
    </div>
    )
}

export default Banner;