import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    if(!song){
        return <div>Select a Song</div>
    }
    return(
        <div>
            <h3>Details for:</h3>
            <p>Title:{song.title}</p>
            <p>Duration:{song.duration}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    //lhs can be anything rhs has to match name defined in combine reducers
    console.log(state)
    return {song: state.selectedSong}
}

//no second param in connect because we don't need action creators here
export default connect(mapStateToProps)(SongDetail);