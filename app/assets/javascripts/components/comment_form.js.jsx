var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.refs.author.value.trim();
    var text = this.refs.text.value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({ author: author, text: text });
    this.refs.author.value = '';
    this.refs.text.value = '';
  },
  render: function() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Author</label>
          <input className="form-control" type="text" placeholder="Your name" ref="author" />
        </div>
        <div className="form-group">
          <label>Text</label>
          <input className="form-control" type="text" placeholder="Say something..." ref="text" />
        </div>
        <button className="btn btn-primary" type="submit">Post</button>
      </form>
    );
  }
});
