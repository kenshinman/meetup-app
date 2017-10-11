import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class MeetupDetails extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      details: {}
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  getMeetup() {
    const meetupId = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/api/meetups/${meetupId}`)
      .then(response => {
        let data = response.data;
        this.setState({ details: data }, () => {
          console.log(this.state);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleDelete() {
    let id = this.state.details.id;

    axios
      .request({
        method: "delete",
        url: `http://localhost:3000/api/meetups/${id}`
      })
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  }

  componentWillMount() {
    this.getMeetup();
  }

  render() {
    const { id, name, city, address } = this.state.details;
    return (
      <div>
        <br />
        <Link to="/" className="btn grey">
          Back
        </Link>
        <h1>{name}</h1>
        <ul className="collection">
          <li className="collection-item">City: {city}</li>
          <li className="collection-item">Address: {address}</li>
        </ul>
        <Link
          to={`/meetups/edit/${id} `}
          className="btn waves-effect waves-light"
        >
          {" "}
          <i className="fa fa-pencil" /> Edit
        </Link>
        <button
          onClick={this.handleDelete}
          className="btn red right waves-effect waves-light"
        >
          {" "}
          <i className="fa fa-trash" /> Delete
        </button>
      </div>
    );
  }
}
