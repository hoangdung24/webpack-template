import { CCol, CRow, } from '@coreui/react'
import React from 'react'
import C1 from "./c1/c1"
import C2 from "./c2/c2"
import C3 from "./c3/c3"

const Home = props => {
    return (
        <CRow>
            <C1 {...props} />
            <C2 {...props} />
            <C3 />
        </CRow>
    )
}

export default Home
