import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class EditMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city: "",
      address: "",
      id: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  getMeetup() {
    const meetupId = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/api/meetups/${meetupId}`)
      .then(response => {
        let data = response.data;
        this.setState(
          {
            id: data.id,
            name: data.name,
            city: data.city,
            address: data.address
          },
          () => {
            //console.log(this.state);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateMeetup(newMeetup) {
    axios
      .request({
        method: "put",
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

  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }

  onSubmit(e) {
    const { name, city, address } = this.refs;
    const newMeetup = {
      name: name.value,
      city: city.value,
      address: address.value
    };

    this.updateMeetup(newMeetup);
    e.preventDefault();
  }

  componentWillMount() {
    this.getMeetup();
  }
  render() {
    const { name, city, address } = this.state;
    return (
      <div>
        <br />
        <Link to="/" className="btn grey">
          Back
        </Link>

        <h1>Edit Meetup</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input
              onChange={this.handleInputChange}
              type="text"
              name="name"
              ref="name"
              value={name}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input
              onChange={this.handleInputChange}
              type="text"
              name="city"
              ref="city"
              value={city}
            />
            <label htmlFor="city">City</label>
          </div>
          <div className="input-field">
            <input
              onChange={this.handleInputChange}
              type="text"
              name="address"
              ref="address"
              value={address}
            />
            <label htmlFor="address">Address</label>
          </div>
          <input type="submit" className="btn" value="Save Changes" />
        </form>
      </div>
    );
  }
}
