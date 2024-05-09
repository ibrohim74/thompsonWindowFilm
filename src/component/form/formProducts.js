import React, {useState} from 'react';
import './form.css'
const FormProducts = ({data}) => {
    const [initialState , setInitialState] = useState({})
    return (
        <div className={'form'}>
            <div className="form_box">
                <input type={'text'}
                       placeholder={'imya'}
                       onChange={(e)=>setInitialState({...initialState, name:e.target.value})}/>
                <input
                    type="text"
                    placeholder={ "+998" }
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
                <button>SEND</button>
            </div>
        </div>
    );
};

export default FormProducts;