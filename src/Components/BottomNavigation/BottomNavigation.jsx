import React, { useState } from "react";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { AiOutlineHome } from "react-icons/ai";
import {
  GiLinkedRings,
  GiTimeSynchronization,
  GiPhotoCamera,
  GiConfirmed,
} from "react-icons/gi";
import "./BottomNavigation.scss";

const useStyles = makeStyles({
  stickToBottom: {
    width: "100%",
    height: 70,
    position: "fixed",
    bottom: 0,
    backgroundColor: "#fff",
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = useState("home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bottom-nav">
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.stickToBottom}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<AiOutlineHome fontSize="25px" />}
          component={Link}
          to="section-home"
          spy={true}
          // smooth={true}
          activeClass="active"
        />
        <BottomNavigationAction
          label="Couples"
          value="couples"
          icon={<GiLinkedRings fontSize="25px" />}
          component={Link}
          to="section-couple"
          spy={true}
          // smooth={true}
          activeClass="active"

        />
        <BottomNavigationAction
          label="Event"
          value="event"
          icon={<GiTimeSynchronization fontSize="27px" />}
          component={Link}
          to="section-event"
          spy={true}
          // smooth={true}
          activeClass="active"
        />
        <BottomNavigationAction
          label="Gallery"
          value="gallery"
          icon={<GiPhotoCamera fontSize="25px" />}
          component={Link}
          to="section-gallery"
          spy={true}
          // smooth={true}
          activeClass="active"
        />
        <BottomNavigationAction
          label="R.S.V.P"
          value="rsvp"
          icon={<GiConfirmed fontSize="23px" />}
          component={Link}
          to="section-reservation"
          spy={true}
          // smooth={true}
          activeClass="active"
        />
      </BottomNavigation>
    </div>
  );
}
