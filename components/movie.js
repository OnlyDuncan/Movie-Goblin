import React, { useState, useEffect } from "react";
import { getFirestore, collection, addDoc, deleteDoc } from "firebase/firestore";
import Light_Heart from "../icons/heart_toggle_light";
import Dark_Heart from "../icons/heart_toggle_dark";


const DEFAULT_PLACEHOLDER_IMAGE = 
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {

    const title = `${movie.Title}`;

    const poster =
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    const year = `${movie.Year}`;

    const db = getFirestore();

    const collectionRef = collection(db, "favorites");

    const [favoriteStatus, setFavoriteStatus] = useState(useEffect(() => {
        localStorage.getItem("favoriteStatus") || "notFavorite"
        }, [])
    );

    const addToFavorites = async () => {
        await addDoc(collectionRef, {
            ...movie,
            Name: title,
            Poster: poster,
            Year: year
        })
    };

    const deleteFromFavorites = async () => {
        await deleteDoc(collectionRef, {
            ...movie,
        })
    };

    const toggleFavorite = () => {
        if (favoriteStatus === "notFavorite") {
            setFavoriteStatus("favorite");
            addToFavorites();
        } else {
            setFavoriteStatus("notFavorite");
            deleteFromFavorites();
        }
    };

    return (
        <div className="movie">
            <h2>{movie.Title}</h2>
            <div>
                <img
                    width="200"
                    alt={`The movie titled: ${movie.Title}`}
                    src={poster}
                />
            </div>
            <button onClick={toggleFavorite}>
                {(() => {
                    if (favoriteStatus === "favorite") {
                        return <Dark_Heart />
                    } else {
                        return <Light_Heart />
                    }
                })()}
            </button>
            <p>({movie.Year})</p>
        </div>
    );
};

export default Movie;