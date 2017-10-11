import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class AddMeetup extends Component {
  state = {};

  addMeetup(newMeetup) {
    axios
      .request({
        method: "post",
        url: "http://localhost:3000/api/meetups",
        data: newMeetup
      })
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  }

  onSubmit(e) {
    const { name, city, address } = this.refs;
    const newMeetup = {
      name: name.value,
      city: city.value,
      address: address.value
    };

    this.addMeetup(newMeetup);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <br />
        <Link to="/" className="btn grey">
          Back
        </Link>
        <h1>Add Meetup</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="city" ref="city" />
            <label htmlFor="city">City</label>
          </div>
          <div className="input-field">
            <input type="text" name="address" ref="address" />
            <label htmlFor="address">Address</label>
          </div>
          <input type="submit" className="btn" value="Submit" />
        </form>
      </div>
    );
  }
}
