import { useRef } from 'react';

const HoverAudio = ({children}) => {
    const audioRef = useRef(null);

    const playAudio = () => {
        audioRef.current.play();
    };

    return (
        <div onMouseOver={playAudio}>
            {children}
            <audio ref={audioRef} src={'/check.wav'} preload="auto" />
        </div>
    );
};

export default HoverAudio;