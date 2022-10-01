import React from 'react'

function LinkToDoc({ ...props }) {
    return (
        <a style={{ fontSize: '15px' }} href={props.link}>{props.title}</a>
    )
}

export default LinkToDoc