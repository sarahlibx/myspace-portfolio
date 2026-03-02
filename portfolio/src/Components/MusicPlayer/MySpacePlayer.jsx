import React, { useState, useRef } from "react";
import '../../style.css';

const MySpacePlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="myspace-player border-0">
            <h6 className="player-title bg-primary">Now Playing: Helena - My Chemical Romance</h6>

            <audio 
                src="../../assets/helena.mp3"
                ref={audioRef}
                onEnded={() => setIsPlaying(false)}   
            />
            
            <div className="d-flex align-items-center player-container mx-2">
                <img 
                    src="../../assets/mcrcover.jpg" 
                    alt="My Chemical Romance Album Artwork"
                    className='album-artwork rounded border me-2'
                    style={{ width: '50px', height: '50px', objectFit: 'cover', flexShrink: '0' }}
                />

                <div className="track-name flex-grow-1 overflow-hidden me-2" style={{ fontSize: '0.9rem', display: 'block' }}>
                    <marquee scrollamount="4" className='marquee-text'>'My Chemical Romance - Helena'</marquee>
                </div>
                        
                <div className="controls">
                    <button 
                        onClick={togglePlay}
                        className="btn btn-play">
                        {isPlaying ? '⏸️' : '▶️'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MySpacePlayer;