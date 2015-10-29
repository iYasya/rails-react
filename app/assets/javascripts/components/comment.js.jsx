var Comment = React.createClass({
  render: function() {
    return(
    <div className="media">
      <div className="media-body">
        <h4 className="media-heading">{this.props.data.author}</h4>
        <p dangerouslySetInnerHTML={{ __html: this.props.data.text }}></p>
      </div>
    </div>);
  }
});
