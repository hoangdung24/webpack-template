import React from 'react'
import CIcon from '@coreui/icons-react';
const SocialItem = (props) => {
    return (
        <div className="social__icon d-flex justify-content-center align-items-center np-out-btn mr-3">
            <CIcon content={props.icon} size="lg" />
        </div>
    )
}

export default SocialItem
