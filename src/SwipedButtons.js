import { IconButton } from '@material-ui/core'
import React from 'react'
import './SwipedButtons.css'
import ReplyIcon from '@material-ui/icons/Reply';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
function SwipedButtons() {
    return (
        <div className="swipedButtons">
            <IconButton className="swipedButtons__repeat">
<ReplyIcon/>
            </IconButton >
            <IconButton className="swipedButtons__left">
<CloseIcon/>
            </IconButton>
            <IconButton className="swipedButtons__star">
<StarRateIcon/>
            </IconButton>
            <IconButton className="swipedButtons__right">
<FavoriteIcon/>
            </IconButton>
            <IconButton className="swipedButtons__lightning">
<FlashOnIcon/>
            </IconButton>
            
        </div>
    )
}

export default SwipedButtons
