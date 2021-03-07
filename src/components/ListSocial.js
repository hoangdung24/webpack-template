import React from 'react';
import SocialItem from './SocialItem';
import {
    cibFacebookF,
    cibGithub,
    cibYoutube
} from '@coreui/icons';

const ListSocial = () => {
    const icons = [cibFacebookF, cibYoutube, cibGithub];

    return (
        <div className="d-flex social mb-3 w-100">
            <div className="d-flex social__inner mx-auto">
                {icons.map(icon => {
                    return (<SocialItem icon={icon} />)
                })}
            </div>
        </div>
    )
}

export default ListSocial
