import React from 'react';

import styles from "./joke.module.css";

function Joke({ joke }) {
    return (
        <div className={styles.joke}>
            {joke}
        </div>
    )
}

export default Joke;
