"use client";

import { useEffect, useState } from "react";
import styles from "./Darkmode.module.css";

const THEME_KEY = "theme";

function readInitialTheme() {
    if (typeof document === "undefined") return "light";
    const fromDom = document.documentElement.getAttribute("data-theme");
    if (fromDom === "dark" || fromDom === "light") return fromDom;
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "dark" || stored === "light") return stored;
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
}

export function Darkmode() {
    const [theme, setTheme] = useState("light");
    const [mounted, setMounted] = useState(false);

    const applyTheme = (mode) => {
        const root = document.documentElement;
        root.setAttribute("data-theme", mode);
        localStorage.setItem(THEME_KEY, mode);
    };

    useEffect(() => {
        const initial = readInitialTheme();
        setTheme(initial);
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        applyTheme(theme);
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme(current => current === "dark" ? "light" : "dark");
    };

    return (
        <button onClick={toggleTheme} aria-label="Toggle dark mode" className={styles.toggle}>
            {mounted && (theme === "dark" ? <i className="icon-sombre" aria-hidden /> : <i className="icon-lumiere" aria-hidden />)}
        </button>
    );
}