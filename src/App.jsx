import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let newPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }

    setPassword(newPassword);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password Copied!");
  };

  return (
  <div className="container">
    <div className="card">
      <h1>🔐 Password Generator</h1>
      <p className="subtitle">
        Generate strong and secure passwords instantly
      </p>

      <label>Password Length</label>

      <input
        type="number"
        min="4"
        max="20"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />

      <button className="btn generate-btn" onClick={generatePassword}>
        Generate Password
      </button>

      <div className="password-box">
        {password || "Your generated password appears here"}
      </div>

      <button className="btn copy-btn" onClick={copyPassword}>
        Copy Password
      </button>
    </div>
  </div>
);}

export default App;
