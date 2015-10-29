//= require_tree ./components

ReactDOM.render(
  <CommentBox url='/comments.json' pollInterval={5000} />,
  document.getElementById('content')
);
