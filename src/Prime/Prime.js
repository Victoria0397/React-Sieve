import React from 'react'

function Prime(props){
    return(
        <div>
            <button onClick={props.onSendToServer}>Start calculate</button>
        </div>
    )
}

export default Prime