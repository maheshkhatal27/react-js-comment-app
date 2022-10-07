import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    userList: [],
    name: '',
    comment: '',
    count: 0,
  }

  inputName = event => {
    this.setState({name: event.target.value})
  }

  inputComments = event => {
    this.setState({comment: event.target.value})
  }

  addCommentDetails = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initial = name.slice(0, 1)
    const date = formatDistanceToNow(new Date())
    const colorName =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)]

    const userDetails = {
      id: uuidv4(),
      firstInitial: initial,
      names: name,
      comments: comment,
      dates: date,
      color: colorName,
      isFavorite: false,
    }
    this.setState(prevState => ({
      userList: [...prevState.userList, userDetails],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
    console.log(userDetails)
  }

  deleteComment = id => {
    const {userList} = this.state
    const filteredUserList = userList.filter(eachUser => eachUser.id !== id)
    this.setState(prevState => ({
      userList: filteredUserList,
      count: prevState.count - 1,
    }))
  }

  toggleLikedBtn = id => {
    this.setState(prevState => ({
      userList: prevState.userList.map(eachUser => {
        if (eachUser.id === id) {
          return {...eachUser, isFavorite: !eachUser.isFavorite}
        }
        return eachUser
      }),
    }))
  }

  render() {
    const {name, comment, userList, count} = this.state
    return (
      <div className="comments-bg-container">
        <h1 className="heading">Comments</h1>
        <div className="comments-img-container">
          <img
            className="comment-img"
            alt="comments"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          />
          <div className="comments-container">
            <p className="about">Say something about 4.0 Technologies</p>
            <div className="form-container-elements">
              <form
                className="form-container"
                onSubmit={this.addCommentDetails}
              >
                <input
                  type="text"
                  className="form-name"
                  placeholder="Your Name"
                  onChange={this.inputName}
                  value={name}
                />
                <textarea
                  className="form-comment"
                  placeholder="Your Comment"
                  onChange={this.inputComments}
                  value={comment}
                />
                <button type="submit" className="button">
                  Add Comment
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="comment-count-container">
          <div className="count-container">
            <p className="count">{count}</p>
          </div>
          <p className="comments-count">Comments</p>
        </div>
        <ul>
          {userList.map(eachUser => (
            <CommentItem
              key={eachUser.id}
              userDetails={eachUser}
              deleteComment={this.deleteComment}
              toggleLikedBtn={this.toggleLikedBtn}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
