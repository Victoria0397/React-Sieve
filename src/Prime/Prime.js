import React from 'react'

function Prime(props){
    return(
        <div>
            <h1>Its for test Eratosphene</h1>
            <input type="text" />
            <input type="text" />
            <button onClick={props.onSendToServer}>Start calculate</button>
        </div>
    )
}

export default Prime