import { useEffect, useState } from "react";

const ToggleTheme = () => {
    type Theme = "dark" | "light";

    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const setAndSaveTheme = (newTheme: Theme) => {
            localStorage.setItem("theme", newTheme);
            setTheme(newTheme);
        };

        const updateDocumentClassList = () => {
            document.documentElement.classList.toggle("dark", theme === "dark");
        };

        const currentTheme = localStorage.getItem("theme") as Theme | null;

        if (!currentTheme || (currentTheme !== "dark" && currentTheme !== "light")) {
            setAndSaveTheme("light");
        } else {
            setTheme(currentTheme);
        }

        updateDocumentClassList();

        console.log(theme);
    }, [theme]);

    return <div>{theme}</div>;
};

export default ToggleTheme;