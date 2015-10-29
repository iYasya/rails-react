var Comment = React.createClass({
  render: function() {
    return(
    <div className="comment">
      <h1>{this.props.data.author}</h1>
      <p dangerouslySetInnerHTML={{ __html: this.props.data.text }}></p>
    </div>);
  }
});
