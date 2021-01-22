import {combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'no scrubs', duration: '4:05'},
        {title: 'all star', duration: '4:02'},
        {title: 'macarena', duration: '4:04'},
        {title: 'i want it that way', duration: '3:05'}
    ]
}

//selectedSong = null is init value
const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload
    }
    //else return action in its original form
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});