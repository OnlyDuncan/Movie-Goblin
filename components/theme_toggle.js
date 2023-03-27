import React, { useState, useEffect } from 'react';

function theme_toggle() {
        
    const [theme, setTheme] = useState(useEffect(() => {
        localStorage.getItem("theme") || "light"
        }, [])
    );

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.className = theme;
    }, [theme]);
    

    return (
        <div className={`App ${theme}`}>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default theme_toggle;