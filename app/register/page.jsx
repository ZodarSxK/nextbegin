import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Register.module.css'

const Register = () => {
  return (
    <>
            <Head>
                <title>Register</title>
            </Head>
            <div className={styles.contrainer}>
                <form className={styles.form}>
                    
                    <div className={styles.title}>สมัครสมาชิก</div>
                    
                    <div className={styles.reg}>
                        <input type="text" placeholder="ชื่อผู้ใช้" required></input>
                    </div>
                    
                    <div className={styles.reg}>
                        <input type="email" placeholder="อีเมล" required ></input>
                    </div>
                   
                    <div className={styles.reg}>
                        <input type="text" placeholder="รหัสผ่าน" required></input>
                    </div>

                    <div className={styles.reg}>
                        <input type="text" placeholder="ยืนยันรหัสผ่าน" required></input>
                    </div>
                    <div className={styles.reg}>
                        <input type="tel" placeholder="เบอร์โทร" required></input>
                    </div>
                   
                    <div className={styles.btn}>
                        <Link href="/register-saler"><button className={styles.btn1}>สมัครสมาชิกผู้ขาย</button></Link>
                        <Link href="/login"><button className={styles.btn2} type="submit">สมัครสมาชิก</button></Link>
                    </div>
                    
                
                </form>
            </div>
        </>
  )
}

export default Register