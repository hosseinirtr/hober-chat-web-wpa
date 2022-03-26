import { InputNumber } from 'antd'
import React from 'react'
import { IMinimalTextInput } from '../../../functions/Interface/IMinimalTextInput'
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';

export default function MinimalInput({ name, defaultValue, className, id, label, inValid = false, errorText = null, type = "text", placeholder, htmlFor = "", onChange }: IMinimalTextInput) {


    return (
        <div className="w-full px-3 mb-6 md:mb-0">
            {label && <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={htmlFor}>
                {label}
            </label>}
            {name === "phoneNumber" ? (
                <InputNumber status={inValid ? "error" : ""} style={{ width: '100%' }} prefix={inValid ? <ClockCircleOutlined /> : null} defaultValue={defaultValue} onChange={onChange} />
            ) : (
                <input value={defaultValue} name={name} onChange={onChange} className={` "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" ${className} ${inValid && "border - red - 500"} `} id={id} type={type} placeholder={placeholder} />
            )}
            {inValid && <p className="text-red-500 text-xs italic">{errorText}</p>}
        </div>
    )
}

