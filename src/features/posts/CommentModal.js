import React from "react";
import { sub } from "date-fns";
import { TimeAgo } from "./TimeAgo";

class CommentModal extends React.Component {
  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: [
        {
          id: 1,
          author: "Tia",
          body: "This is my first comment on this forum ",
          date: sub(new Date(), { minutes: 10 }).toISOString()
        },
        { id: 2, author: "David", body: "Cool",  date: sub(new Date(), { minutes: 10 }).toISOString() },
        { id: 3, author: "Ria", body: "lol",  date: sub(new Date(), { minutes: 10 }).toISOString()  },
      ],
    };
  }

  render() {
    const comments = this._getComments();
    let commentNodes;
    let buttonText = "Show Comments";

    if (this.state.showComments) {
      buttonText = "Hide Comments";
      commentNodes = <div className="comment-list">{comments}</div>;
    }

    return (
      <div className="comment-box">
        <CommentForm addComment={this._addComment.bind(this)} />
        <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
          {buttonText}
        </button>
        <h3>Comments</h3>
        <h4 className="comment-count">
          {this._getCommentsTitle(comments.length)}
        </h4>
        {commentNodes}
      </div>
    );
  } // end render

  _addComment(author, body, date) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body,
      date: new Date().toISOString()
    };
    this.setState({ comments: this.state.comments.concat([comment]) });
  }

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments,
    });
  }

  _getComments() {
    return this.state.comments.map((comment) => {
      return (
        <Comment author={comment.author} body={comment.body} date={comment.date} key={comment.id} />
      );
    });
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return "No comments yet";
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  }
}

class CommentForm extends React.Component {
  render() {
    return (
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <div className="comment-form-fields">
          <input
            placeholder="Name"
            required
            ref={(input) => (this._author = input)}
          ></input>
          <br />
          <textarea
            placeholder="Comment"
            rows="4"
            required
            ref={(textarea) => (this._body = textarea)}
          ></textarea>
        </div>
        <div className="comment-form-actions">
          <button type="submit">Post Comment</button>
        </div>
      </form>
    );
  } // end render

  _handleSubmit(event) {
    event.preventDefault();
    let author = this._author;
    let body = this._body;
    this.props.addComment(author.value, body.value);
  }
}

class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">- {this.props.body}</p>
        {<TimeAgo timestamp={this.props.date}/>}
       
      </div>
    );
  }
}

export { CommentModal, CommentForm, Comment };
