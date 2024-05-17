import React, {useState} from 'react';
import style from './contact.module.css'
import Navbar from "../../component/navbar/navbar";
const Contact = () => {
    const [initialState, setInitialState] = useState()

    return (
        <div>

<Navbar/>
            <div className={style.window_header}>
                <video src={require("../../assets/videos/videoBronPlyonka.mp4")} autoPlay muted loop></video>
                <div className={style.window_header_text}>
                    <h1>Contact US</h1>
                </div>
                <div className={style.window_header_shadow}></div>
            </div>

            <div className="container">
                <div className={style.contact_box}>
                    <div className={style.contact_title}>
                        <h1>Get in touch</h1>
                        <p>Are you interested in receiving more information, samples, and pricing?</p>
                    </div>

                    <div className={style.contact_form}>
                        <div className={style.coolinput}>
                            <label htmlFor="input" className={style.text}>Ismingiz:</label>
                            <input type="text"  name="input" className={style.input}/>
                        </div>
                        <div className={style.coolinput}>
                            <label htmlFor="input" className={style.text}>Telefon Raqamingiz:</label>
                            <input type="text" placeholder="+998" name="input" className={style.input}
                                   value={initialState?.contacts}
                                   onChange={e => {
                                       const formattedValue = e.target.value.replace(/\D/g, '');
                                       let formattedNumber = '+998';
                                       if (formattedValue.length > 3) {
                                           formattedNumber += ' ' + formattedValue.substring(3, 5);
                                       }
                                       if (formattedValue.length > 5) {
                                           formattedNumber += ' ' + formattedValue.substring(5, 8);
                                       }
                                       if (formattedValue.length > 8) {
                                           formattedNumber += ' ' + formattedValue.substring(8, 10);
                                       }
                                       if (formattedValue.length > 10) {
                                           formattedNumber += ' ' + formattedValue.substring(10, 12);
                                       }
                                       setInitialState({...initialState, contacts: formattedNumber});
                                   }}
                            />
                        </div>
                        <div className={style.coolinput}>
                            <textarea type="text" placeholder="Xabar" name="input" cols="50" rows="10"  className={style.input}/>
                        </div>

                        <button>SEND</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;