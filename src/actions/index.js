// Action creator
// Put export in front for named exports
export const selectSong = (song) => {
    // Return an Action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};
