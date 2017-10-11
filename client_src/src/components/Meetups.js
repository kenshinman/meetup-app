import React, { Component } from "react";
import axios from "axios";
import MeetupItem from './MeetupItem'

class Meetups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetups: []
    };
  }

  getMeetups(){
    axios.get('http://localhost:3000/api/meetups').then( response => {
        //console.log(response.data);
        this.setState({meetups: response.data}, () => {
            console.log(this.state);
        })
    }).catch(err => {console.log(err);})
  }

  componentWillMount() {
      this.getMeetups();
  }

  render() {
      const meetupItems = this.state.meetups.map( (meetup, index) => {
          return (
              <MeetupItem meetup={meetup} key={meetup.id} />
          )
      })
    return (
      <div>
        <h1>Meetups</h1>
        <ul className="collection">
            {meetupItems}
        </ul>
      </div>
    );
  }
}

export default Meetups;
