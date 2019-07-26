import React from "react";

import { ReactComponent as SongIcon } from "../../assets/song-icon.svg";
import { ReactComponent as MoveBackIcon } from "../../assets/move-back-icon.svg";
import { ReactComponent as MoveForwardIcon } from "../../assets/move-forward-icon.svg";
import { ReactComponent as PlayIcon } from "../../assets/play-icon.svg";
import { ReactComponent as VolumeIcon } from "../../assets/volume-icon.svg";
import { ReactComponent as SnapshotIcon } from "../../assets/snapshot-icon-white-dark.svg";
import { ReactComponent as DownloadIcon } from "../../assets/download-icon.svg";

import "./PlayerBar.styles.css";
const PlayerBar = () => {
  return (
    <div className="player-bar">
      <SongIcon />
      <div className="song-info">
        <p className="song-title">Get Lucky</p>
        <p className="song-artist">Daft Punk</p>
      </div>
      <div className="play-controls">
        <MoveBackIcon />
        <PlayIcon />
        <MoveForwardIcon />
      </div>
      <div className="progress">
        <p>0:00</p>
        <div className="progress-bar">
          <div className="progress-meter" />
        </div>
        <p>3:00</p>
      </div>
      <div className="interactive-controls">
        <VolumeIcon />
        <SnapshotIcon />
        <DownloadIcon />
      </div>
      <button>Upload New Song</button>
    </div>
  );
};

export default PlayerBar;
