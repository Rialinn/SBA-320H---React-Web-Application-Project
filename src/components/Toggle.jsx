import { useState } from 'react';

// Defining a toggle component
const Toggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode'); // Toggle dark mode class on body
    }

    return (
        <button onClick={toggleMode}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
}

export default Toggle;