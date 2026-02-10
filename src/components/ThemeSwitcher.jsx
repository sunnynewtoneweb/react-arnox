import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../utils/cookies";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("color-1");

  // 1. On page load → read cookie
  useEffect(() => {
    const savedTheme = getCookie("themeColor");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // 2. When theme changes → load CSS
  useEffect(() => {
    let link = document.getElementById("color");

    if (!link) {
      link = document.createElement("link");
      link.id = "color";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    link.href = `/css/${theme}.css`;
    setCookie("themeColor", theme, 7);
  }, [theme]);

  // 3. Toggle theme on click
  const toggleTheme = () => {
    setTheme(theme === "color-1" ? "color-2" : "color-1");
  };

  return (
    <ul className="change_color">
      <li>
        <button
          onClick={toggleTheme}
          className="color-1"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {theme === "color-1" ? (
            <img src="/images/color_change_ic_2.png" alt="Sun" />
          ) : (
            <img src="/images/color_change_ic_1.png" alt="Moon" />
          )}
        </button>
      </li>
    </ul>
  );
};

export default ThemeSwitcher;
