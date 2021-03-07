import React from 'react'
import {
    CTextarea
} from "@coreui/react"

const Notefield = props => {

    return (
        <textarea 
            className= "note__field mb-3 np-in-btn" 
            // onChange= {props.onChange 
            //     ? props.onChange 
            //     : null}
            placeholder= "Take Note Here"
            rows="12"
            // value= {props.value ? props.value : "Note here"}
        >
        </textarea>

    )
}

export default Notefield
