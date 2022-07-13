import React from 'react'
import Greet from './Greet'
import Hello from './Hello'
import Time from './Time'
import  "./style.css"

const App = () => {

    return (
        <div className='main'>
            <div className='main_1'>    <Time /> </div>
            <div className='main2'>    <Hello /><Greet />   </div>
        </div>
    )
}

export default App