import React, { useEffect } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import './Form.css'

const Form = () => {
    const [country, setCountry]= useState('')
    const [street, setStreet]= useState('')
    const [subject, setSubject]= useState('physical')
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text:"send data"
        })
    }, [])

    useEffect(() => {
        if(!street || !country){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show();
        }
    }, [country, street])

    const onChangeCountry =(e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet =(e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject =(e) => {
        setSubject(e.target.value)
    }
    return (
        <div className={'form'}>
            <h3> input your data </h3>
            <input 
                className={'input'} 
                type="text" 
                placeholder={'country'}
                value={country}
                onChange={onChangeCountry}
            />

            <input 
                className={'input'} 
                type="text" 
                placeholder={'street'}
                value={street}
                onChange={onChangeStreet}
            />

            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>fiz face</option>
                <option value={'legal'}>fiz face</option>
            </select>

        </div>
    )
}

export default Form;