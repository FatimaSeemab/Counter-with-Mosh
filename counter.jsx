import React, { Component } from "react";
class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // tags: [],
  //   tags: ["tag1", "tag2", "tag3"],
  //   // imageUrl: "https://picsum.photos/200",
  // };
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  //   constructor() {
  //     super();
  //   this.handleIncrement=   this.handleIncrement.bind(this)
  //   }
  // handleIncrement = () => {
  //   // console.log(product);
  //   console.log("Increment clicked", this.state);
  //   // this.state.count++;
  //   this.setState({ value: this.state.value + 1 });
  //   //function is called as part of methid this always work
  //   //as stand alone function this do not work if strict mode  is on
  // };
  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };
  render() {
    // console.log(this.props);
    return (
      <div>
        {this.props.children}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          // onClick={this.doHandleIncrement}
          // onClick={() => this.handleIncrement(product)}
         onClick={() => {
            this.props.onIncrement(this.props.counter)
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.props.onDelete(this.props.counter.id)
          }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"} */}
        {/* {this.renderTags()} */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;
