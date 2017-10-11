import React from "react";
import { Link } from "react-router-dom";

const MeetupItem = ({ meetup }) => {
  return (
    <li className="collection-item">
      <Link to={`/meetups/${meetup.id}`} >{meetup.name}</Link>
    </li>
  );
};

export default MeetupItem;
