import React from 'react'

const Button = ({ background, border, img }) => {
    return (
        <div background={background} border={border}>
            <img src={img} alt=""/>
        </div>
    )
}

export default Button;