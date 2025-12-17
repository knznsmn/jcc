"use client";

import { useEffect, useState } from "react";
import styles from "./Darkmode.module.css";

const THEME_KEY = "theme";

function initializeTheme() {
    if (typeof window === "undefined") return "light";
    
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "dark" || stored === "light") {
        return stored;
    }
    
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
}

export function Darkmode() {
    const [theme, setTheme] = useState(() => initializeTheme());

    const applyTheme = (mode) => {
        const root = document.documentElement;
        root.setAttribute("data-theme", mode);
        localStorage.setItem(THEME_KEY, mode);
    };

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(current => current === "dark" ? "light" : "dark");
    };

    return (
        <button onClick={toggleTheme} aria-label="Toggle dark mode" className={styles.toggle}>
            {theme === "dark" ? <i className="icon-sombre" aria-hidden /> : <i className="icon-lumiere" aria-hidden />}
        </button>
    );
}