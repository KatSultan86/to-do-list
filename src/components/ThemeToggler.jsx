import { useEffect, useState } from "react";
import { IoMdSunny, IoIosMoon } from "react-icons/io";

function ThemeToggler() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <div className="d-flex">
      <button
        onClick={themeToggler}
        className={`btn ms-auto ${
          theme === "light" ? "text-light" : "text-dark-color"
        }`}
      >
        {theme === "light" ? <IoMdSunny /> : <IoIosMoon />}
      </button>
    </div>
  );
}

export default ThemeToggler;
