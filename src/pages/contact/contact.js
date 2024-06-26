import React, {useState} from 'react';
import style from './contact.module.css'
import Navbar from "../../component/navbar/navbar";
import {useTranslation} from "react-i18next";
import { message  } from 'antd';
import axios from "axios";

const Contact = () => {
    const [initialState, setInitialState] = useState()
    const {t} = useTranslation()

    const [username, setUsername] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [tell, setTell] = useState('')
    const [msgText, setMsgText] = useState('')
    const [messageApi, contextHolder] = message.useMessage();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = {
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
        };
        const formattedDate = date.toLocaleDateString("ru-RU", options);
        return formattedDate;
    };

    const checkForm = () => {
        setDisabled(true);

        const hasNumber = /\d/;

        if (!username || username.trim().length === 0) {
            messageApi.open({
                type: 'error',
                content:  t('errors.name_empty'),
            });
            setDisabled(false)
            return;
        }

        if (username.trim().length <= 3 || hasNumber.test(username)) {
            messageApi.open({
                type: 'error',
                content: t('errors.name_error'),
            });
            setDisabled(false)
            return;
        }

        if (!tell || tell.trim().length < 11) {
            messageApi.open({
                type: 'error',
                content: t('errors.tell_error'),
            });
            setDisabled(false)
            return;
        }

        let msg = `<b>Yangi xabar ${formatDate(new Date())} </b> \n`;
        msg += `\n ismi: ${username}\n`;
        msg += `\n tell: ${tell}\n`;
        msg += `\n msg: ${msgText}\n`;

        const TOKEN = "7059423735:AAFgSJIt-KIxB7KB6hGwckuWfWOZ0tbbPYU";
        const CHAT_ID = "-4289057404";

        axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: msg
        }).then((res) => {
           if (res?.status === 200){
               messageApi.open({
                   type: 'success',
                   content: t('errors.success'),
               });
               setTimeout(() => {
                   setMsgText('')
                   setTell('')
                   setUsername('')
                   setDisabled(false)
               }, 1800);
           }

        }).catch((e) => {
            messageApi.open({
                type: 'error',
                content: t('errors.server_error'),
            });
            setDisabled(false)
        });
    };

    return (
        <div>
            {contextHolder}
            <Navbar/>
            <div className={style.window_header}>
                <video src={require("../../assets/videos/videoBronPlyonka.mp4")} autoPlay muted loop></video>
                <div className={style.window_header_text}>
                    <h1>{t("contact")}</h1>
                </div>
                <div className={style.window_header_shadow}></div>
            </div>

            <div className="container">
                <div className={style.contact_box}>
                    <div className={style.contact_title}>
                        <h1>{t("contact")}</h1>
                        <p>{t('contact_p')}</p>
                    </div>

                    <div className={style.contact_form}>
                        <div className={style.coolinput}>
                            <label htmlFor="input" className={style.text}>{t("contact_name")}</label>
                            <input type="text" name="input" className={style.input}
                            value={username}
                             onChange={e=>setUsername(e.target.value)}
                            />
                        </div>
                        <div className={style.coolinput}>
                            <label htmlFor="input" className={style.text}>{t("contact_tell")}</label>
                            <input type="text" placeholder="+998" name="input" className={style.input}
                                   value={tell}
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
                                       setTell(formattedNumber);
                                   }}
                            />
                        </div>
                        <div className={style.coolinput}>
                            <textarea type="text" placeholder={t("contact_msg")} name="input" cols="50" rows="10"
                                      className={style.input}
                                      value={msgText}
                                      onChange={e=>setMsgText(e.target.value)}
                            />
                        </div>

                        <button onClick={checkForm} disabled={disabled}>{t("contact_send")}</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;