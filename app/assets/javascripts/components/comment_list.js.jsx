var CommentList = React.createClass({
  getInitialState: function() {
    return { data: [] };
  },
  componentDidMount: function(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ data: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    var commentNodes = this.state.data.map(function(comment, index) {
      return <Comment data={comment} key={comment.id} />;
    });
    return (
      <div className="comment-list">
        {commentNodes}
      </div>
    );
  }
});
