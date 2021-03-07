import React from 'react'
import {connect} from "react-redux"
import TheContent from './TheContent';


const TheLayout = (props) => {
  return (
    <div className={props.mode === 'light' ? 'c-wrapper' : 'c-wrapper dark__theme'}>
        <div className="c-body">
          <TheContent {...props} />
        </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  mode: state.modeReducer.mode
});

export default connect(mapStateToProps)(TheLayout)
