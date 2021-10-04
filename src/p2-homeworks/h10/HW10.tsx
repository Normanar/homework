import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import preloader from './preloader.gif'
import {AppStoreType} from "./bll/store";
import {InitStateType, loadingOffAC, loadingOnAC} from "./bll/loadingReducer";
import a from './HW10.module.css'

// type LoadingType = {
//     loading: boolean
// }

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()
    const loadingOff = () => dispatch(loadingOffAC())
    console.log(loading)


    const setLoading = () => {
        dispatch(loadingOnAC())
        setTimeout(loadingOff, 2000)
        console.log('loading...')
    };

    return (
        <div className={a.main}>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <img src={preloader}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
