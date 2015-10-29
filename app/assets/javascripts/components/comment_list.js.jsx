var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment, index) {
      return <Comment data={comment} key={comment.id} />;
    });
    return (
      <div className="comment-list">
        {commentNodes}
      </div>
    );
  }
});
