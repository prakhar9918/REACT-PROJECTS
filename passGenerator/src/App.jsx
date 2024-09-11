import { useState, useCallback, useEffect ,useRef } from 'react';
import './App.css'; 

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

  const passwordRef = useRef(null);

  const passgenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (numAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*";
    }
    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length);
      pass += str.charAt(idx);
    }
    setPass(pass);
  }, [length, numAllowed, charAllowed, setPass]);
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  useEffect(passgenerator, [length, numAllowed, charAllowed]);

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <input
        type="text"
        value={pass}
        placeholder="Password"
        readOnly
        ref={passwordRef}
      />
      <button onClick={copyPasswordToClipboard}>Copy</button>

      <div className="range-container">
        <input
          type="range"
          min={6}
          max={20}
          value={length}
          onChange={(e) => { setLength(Number(e.target.value))} }
        />
        <label>Length: {length}</label>
      </div>

      <div>
        <input
          type="checkbox"
          checked={numAllowed}
          onChange={() => setNumAllowed((prev) => !prev)}
        /><label htmlFor="numberInput">Numbers</label>

        <input
          type="checkbox"
          checked={charAllowed}
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
  );
}

export default App;
