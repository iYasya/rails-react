var Comments = React.createClass({
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
      return (
        <div key={comment.id}>
          <h1>{comment.author}</h1>
          <p dangerouslySetInnerHTML={{ __html: comment.text }}></p>
        </div>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

ReactDOM.render(
  <Comments url='/comments.json' />,
  document.getElementById('content')
);
