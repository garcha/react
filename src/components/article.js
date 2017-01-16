import React, { Component } from "react";

export default class extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className="col-md-4">
        <h2>{title}</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <a className="btn btn-default" href="#">More info</a>
      </div>
    );
  }
}
