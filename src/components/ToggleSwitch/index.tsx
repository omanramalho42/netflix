import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ToggleSwitch = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button
        style={{ padding: 10, borderRadius: 15, background: 'red' }} 
        onClick={toggleTheme}
      >
        toggle theme
      </button>
    </div>
  )
}

export default ToggleSwitch