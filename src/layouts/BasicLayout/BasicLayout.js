import React from 'react'
import {Footer} from '../../components/Footer/Footer'
import {Header} from '../../components/Header/Header'

export const BasicLayout = props => {
    return (
        <div>
            <Header/>
            <h1>This is Basic Layout</h1>
            {props.children}
            <Footer/>
        </div>
    )
}
