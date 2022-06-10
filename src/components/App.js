// create your App component here
import React, { useState, useEffect} from "react";

function App() {
    const [imageSet, setImage] = useState([]);
    const [loadedSet, setLoaded] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((resp) => resp.json())
            .then((image) => {
                setImage(image);
                setLoaded(true);
            });
    }, []);

    if (!loadedSet) return <p>Loading...</p>;

    return (
        <div>
            <img src={imageSet.message} alt="A Random Dog"></img>
        </div>
    );
}

export default App;