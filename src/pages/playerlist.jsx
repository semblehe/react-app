import { useRef, useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import Player from "../components/Layouts/Player.jsx";
import {useLogin} from "../hooks/useLogin.jsx";
import {getRadios} from "../services/radio.service.js";

const PlayerlistPage = ({songsdata}) => {

    const {id} = useParams();

    console.log(songsdata)

    const [songs, setSongs] = useState(songsdata);
    const [isplaying, setisplaying] = useState(false);
    // const [currentSong, setCurrentSong] = useState(songsdata[1]);
    const audioElem = useRef();

    // useEffect(() => {
    //     if (isplaying) {
    //         audioElem.current.play();
    //     }
    //     else {
    //         audioElem.current.pause();
    //     }
    // }, [isplaying, currentSong])
    //
    // const onPlaying = () => {
    //     const duration = audioElem.current.duration;
    //     const ct = audioElem.current.currentTime;
    //
    //     setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })
    //
    // }


    // return (
    //     <div className="App">
    //         <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
    //         <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
    //     </div>
    // );
}

export default PlayerlistPage;
