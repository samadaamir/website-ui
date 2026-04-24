import styles from './center.module.css'
const Center = () => {
  return (
    <div>
    <div className={styles.main}>
        <div className={styles.left}>
           
               <p className={styles.para}> Hey I am a</p> 
                <h1>Creative</h1>
               <h1> Director</h1>
            
        </div>
        <div className={styles.right}>
            <h4 className={styles.heading}>Greate design should feel invisible.</h4>
            <p className={styles.description}>From logo to language, I build brands that connect and convert.</p>
        </div>

    </div>
    <div className={styles.down}>
            <div>
                <h5>#01</h5>
                <p>Brand Strategy</p>
            </div>
            <div>
                <h5>#02</h5>
                <p>Brand Identity Design</p>
            </div>
            <div>
                <h5>#03</h5>
                <p>Packaging Design</p>
            </div>
            <div>
                <h5>#04</h5>
                <p>Creative Direction</p>
            </div>
        </div>
    </div>
  )
}

export default Center