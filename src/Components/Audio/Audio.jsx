import React, { useEffect, useState } from "react";
import { BsFillMicMuteFill, BsMusicNoteBeamed } from "react-icons/bs";
import AudioFile from "../../Assets/Audio/nothing-gonna.mp3";
// import EasyOnMe from "../../Assets/Audio/easy-on-me.mp3";
import "./Audio.scss";

export default function AudioMusic() {
  const [urlAudio] = useState(new Audio(AudioFile));
  const [icon, setIcon] = useState(true);

  useEffect(() => {
    icon ? urlAudio.play() : urlAudio.pause();
  }, [icon, urlAudio]);

  const onChangePlay = () => {
    setIcon(!icon);
  };

  return (
    <div className="audio">
      <div className="icon" onClick={onChangePlay}>
        {icon ? <BsMusicNoteBeamed /> : <BsFillMicMuteFill />}
      </div>
    </div>
  );
}
