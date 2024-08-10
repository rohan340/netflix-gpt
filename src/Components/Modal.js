import { API_OPTIONS } from "../Utils/constants";
import { useState, useEffect } from "react";

const Modal = ({ setShowModal, movieItem }) => {
    const { id } = movieItem;
    const [trailerKey, setTrailerKey] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTrailer = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, 
                API_OPTIONS
            );
            const data = await response.json();

            if (data.results && data.results.length > 0) {
                const trailer = data.results.find(video => video.type === 'Trailer') || data.results[0];
                setTrailerKey(trailer.key);
            } else {
                setError('Trailer not found');
            }
        } catch (error) {
            setError('Failed to fetch trailer');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTrailer();
    }, []);

    const handleClose = () => setShowModal(false);

    if (loading) {
        return <div className="modal-box-container"><h3 style={{ color: "white" }}>Loading...</h3></div>;
    }

    return (
        <div className="modal-box-container">
            {trailerKey ? (
                <iframe
                    width="100%"
                    height="750"
                    src={`https://www.youtube.com/embed/${trailerKey}?&autoplay=1&mute=1`}
                    title={movieItem.title || "Movie Trailer"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    frameBorder={0}
                    allowFullScreen
                />
            ) : (
                <div className="modal-box-noresult">
                    <h3 style={{ color: "white" }}>{error}</h3>
                </div>
            )}
            <button onClick={handleClose} className="close-modal-button">x</button>
        </div>
    );
};

export default Modal;