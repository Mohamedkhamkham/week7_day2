import { useState } from 'react'
import heartOff from './../../assets/heart-off.svg'
import heartOn from './../../assets/heart-on.svg'


const LikeButton = () => {

    const [like, setLike] = useState(false)

    const handleLike = () => {
        setLike(!like)
    }

    return (
        <div className="LikeButton" onClick={handleLike}>

            <img src={like ? heartOn : heartOff} alt="" />

            <h4>¿Me gusta? {like ? 'Sí 😊' : 'No 💩'}</h4>

        </div>
    )
}

export default LikeButton