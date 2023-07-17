import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Register.module.css'

const Registers = () => {
  return (
    <>
            <Head>
                <title>Register-saler</title>
            </Head>
            <div className={styles.contrainer}>
                <form className={styles.form}>
                    
                    <div className={styles.title}>สมัครสมาชิก</div>
                    
                    <div className={styles.reg}>
                        <input type="text" placeholder="ชื่อผู้ใช้"required></input>
                    </div>
                    
                    <div className={styles.reg}>
                        <input type="text" placeholder="อีเมล" required></input>
                    </div>
                   
                    <div className={styles.reg}>
                        <input type="text" placeholder="รหัสผ่าน"required></input>
                    </div>

                    <div className={styles.reg}>
                        <input type="text" placeholder="ยืนยันรหัสผ่าน" required></input>
                    </div>
                    <div className={styles.reg}>
                        <input type="text" placeholder="ที่อยู่" required></input>
                    </div>

                    <div className={styles.reg}>
                        <input type="text" placeholder="รหัสบัตรประชาชน" required></input>
                    </div>
                    <div className={styles.reg}>
                        <input type="text" placeholder="เบอร์โทร" required></input>
                    </div>

                    <div>
                        <label for="images" class={styles.dropcontainer} id="dropcontainer">
                            <span class={styles.droptitle}>แนบรูปบัตร</span>
                            <input type="file" id="images" accept="image/*" required></input>
                        </label>
                         
                    </div>
                   
                   
                    <div className={styles.btns}>
                        <Link href="/login"><button className={styles.btn3} type="submit">สมัครสมาชิก</button></Link>
                    </div>
                    
                
                </form>
            </div>
        </>
  )
}

export default Registers