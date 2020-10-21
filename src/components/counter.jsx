import React, { Component } from "react";

class Counter extends Component {  

  componentDidUpdate(prevProps, prevState){
    // console.log('prevProps', prevProps);
    // console.log('prevState', prevState);

    if(prevProps.counter.value !== this.props.counter.value){

      //then make an ajax call to the server
    }
  }

  componentWillUnmount(){
    // we can use this phase to write clean up code
    // like timers and listeners
    
    //console.log('Component unmounted');
  }

  render() {

    return (
      <div>
        {/* {this.props.children} */}
        <span className={this.styleMethod()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>No tags</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  styleMethod() {
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
