import React, { useState, useEffect } from 'react';
import Light_Toggle from "../icons/light_toggle";
import Dark_Toggle from "../icons/dark_toggle";

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
            <button className="toggleButton" onClick={toggleTheme}>
                {(() => {
                    if (theme === "light") {
                        return <Light_Toggle />
                    } else {
                        return <Dark_Toggle />
                    }
                })()}
            </button>
        </div>
    );
}

export default theme_toggle;