import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import a from './selector.module.css'


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const mappedOptions: any[] = options? options.map((o, i) => (
        <option key={o + '-' + i} value={o} className={a.option}>{o}</option>
        ))
        :[]; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <div className={a.main}>
            <select onChange={onChangeCallback} {...restProps} className={a.selector}>
                {mappedOptions}
            </select>
        </div>
    )
}

export default SuperSelect
