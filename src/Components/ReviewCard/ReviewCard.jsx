import { Avatar } from '@mui/material'
import './ReviewCard.css'

const ReviewCard = ({name,image,review}) => {
  return (
    <div className='review-single-card'>
        <div className="review-left">
            <div className="review-left-image">
                <Avatar alt="Remy Sharp" src={image}/>
            </div>
            <div className="review-left-desc">
                <div className='review-user-name'>{name}</div>
                <div className='review-desc'>{review}</div>
            </div>
        </div>
        <div className="review-right"> 1 weeks ago</div>
    </div>
  )
}

export default ReviewCard