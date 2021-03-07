import React from 'react'
import ReactHtmlParser from "react-html-parser"

const Htmlrender = props => {
    return ReactHtmlParser(props.content ? props.content : "<h4>No data</h4>");
}

export default Htmlrender
