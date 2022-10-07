import './index.css'

const CommentItem = props => {
  const {userDetails, deleteComment, toggleLikedBtn} = props
  const {
    id,
    firstInitial,
    names,
    comments,
    dates,
    color,
    isFavorite,
  } = userDetails

  const clickLikeBtn = () => {
    toggleLikedBtn(id)
  }
  const clickDelButton = () => {
    deleteComment(id)
  }

  const likeClass = isFavorite ? 'liked-btn' : ''

  const likeImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="list-items" key={id}>
      <div className="comment-container">
        <div className={`circle-name ${color}`}>
          <p className="initial">{firstInitial}</p>
        </div>
        <div className="comment-name-time-container">
          <div className="name-time-container">
            <h1 className="name">{names}</h1>
            <p className="time">{dates}</p>
          </div>
          <p className="comment">{comments}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <button type="button" className="like-button" onClick={clickLikeBtn}>
          <img src={likeImgUrl} alt="like" className="like-icon" />
          <p className={`like ${likeClass}`}>Like</p>
        </button>

        <button
          type="button"
          className="icon-button"
          onClick={clickDelButton}
          test="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="del-icon"
            alt="delete"
          />
        </button>
      </div>
      <hr className="horizontal-line" />
    </li>
  )
}

export default CommentItem
