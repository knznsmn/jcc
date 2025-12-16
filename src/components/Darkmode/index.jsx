"use client";

import { useEffect, useState } from "react";
import styles from "./Darkmode.module.css";

const THEME_KEY = "theme";

export function Darkmode() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const stored = typeof window !== "undefined" ? localStorage.getItem(THEME_KEY) : null;
        if (stored === "dark" || stored === "light") {
            applyTheme(stored);
            setTheme(stored);
            return;
        }
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initial = prefersDark ? "dark" : "light";
        applyTheme(initial);
        setTheme(initial);
    }, []);

    const applyTheme = (mode) => {
        const root = document.documentElement;
        root.setAttribute("data-theme", mode);
        localStorage.setItem(THEME_KEY, mode);
    };

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        applyTheme(next);
    };

    return (
        <button onClick={toggleTheme} aria-label="Toggle dark mode" className={styles.toggle}>
            {theme === "dark" ? <i className="icon-sombre" aria-hidden /> : <i className="icon-lumiere" aria-hidden />}
        </button>
    );
}