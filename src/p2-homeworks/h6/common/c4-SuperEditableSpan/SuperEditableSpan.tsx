import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from 'react'
import SuperInputText from '../../../h4/common/c1-SuperInputText/SuperInputText'
import s from "../../HW6.module.css"

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus, // игнорировать изменение этого пропса
        onBlur,
        onEnter,
        spanProps,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}

    const onEnterCallback = () => {
        // setEditMode() // выключить editMode при нажатии Enter
        setEditMode(false)
        onEnter && onEnter()
    }
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        // setEditMode() // выключить editMode при нажатии за пределами инпута
        setEditMode(false)
        onBlur && onBlur(e)
    }
    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        // setEditMode() // включить editMode при двойном клике
        setEditMode(true)
        onDoubleClick && onDoubleClick(e)
    }

    const spanClassName = `${s.style_for_span} ${className}`

    return (
        <div className={s.input_span}>
            {editMode
                ? (

                    <SuperInputText
                        autoFocus // пропсу с булевым значением не обязательно указывать true
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}

                        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                    />
                ) : (<>
                        <img height="15px" src={"data:image/png;base64,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"}/>
                        <span
                            onDoubleClick={onDoubleClickCallBack}
                            className={spanClassName}

                            {...restSpanProps}
                        >
                        {/*если нет захардкодженного текста для спана, то значение инпута*/}
                            {children || restProps.value}
                        </span>
                    </>
                )
            }
        </div>
    )
};

export default SuperEditableSpan
