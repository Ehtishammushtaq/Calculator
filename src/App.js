//this is the App.js file which gets rended in index.js.

import Box from "./box";
import styles from './box.module.css';
function App() {
    return (
        <div className={styles.box}>
           <Box/>
        </div>
    );
}

export default App;

// Path: src/App.js

