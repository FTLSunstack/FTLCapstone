import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "../../tailwind.css";
import IDEPage from "../Pages/IDE/IDEPage/IDEPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <IDEPage />
      </div>
    </>
  );
}

export default App;
