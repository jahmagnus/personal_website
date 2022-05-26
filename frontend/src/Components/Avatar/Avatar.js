import React from 'react'
import './Avatar.css'
import image from './img/avatar.PNG'

const Avatar = () => {
    return (
        <img className="ui medium circular image avatar-image" src={image} alt="Avatar" id="avatar-img"/>
    )
}

export default Avatar