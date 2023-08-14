import Image from "next/image"
import styles from './page.module.css'
import Enviroment from '../../../public/Environment-bro.png'


const page = () => {
  return (
    <div>
      <div className={styles.bg}>
        <div className={styles.heading}>
          <h1>We are Here</h1>
          <h1>For You</h1>
        </div>
      </div>

      <div className={styles.contactBody}>
        <h1>Contact Us</h1>
        <p>We can help. Our team of experts is on hand to answer your questions.</p>

        <div className={styles.line} />
        
      </div>
        
      <div className={styles.c}>
          
        <div className={styles.cWrapper}>
          <div className={styles.cLeft}>
            <div>
              <h1>Have you a questions?</h1>
              <h2>Dont get info you are looking for? Click here to get in touch with us.</h2>
            </div>
            <div>
              <Image src={Enviroment} alt="contact page image" width={400} priority="true"/>
            </div>
                  
                    
          </div>
                
          <div className={styles.cRight}>
            <form className={styles.form}> 
              <input className={styles.input} type="text" placeholder='Name' name='user_name' />
              <input className={styles.input} type="text" placeholder='Email' name='user_email' />
              <input className={styles.input} type="text" placeholder='Subject' name='user_subject' />
              <textarea className={styles.textarea} name="Message" placeholder='Message'  rows="6"></textarea>
              <button className={styles.button}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page