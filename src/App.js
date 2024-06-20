import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';
import { ContextName } from './AppContextProvider';
import useName from './hooks/useName';

function Play() {
  return <p>Lets Play</p>
}
function App() {
  let value = useContext(ContextName);
  const { name } = useName();
  const [num, setNum] = useState(2);
  const textRef = useRef();
  let userRef = useRef(null);
  let previousUser = userRef.current;

  const newNum = useCallback(() => {
   console.log(num + 2);
  }, [num])

  useEffect(() => {
    userRef.current = "Merchant";
    console.log(previousUser + " : " + userRef.current);
  }, [num])

  const styles = {
    color: 'red'
  };

  const handleClick = () => {
    console.log(true);
    setNum(num => num + 1);
    value.setIsDarkMode('false-main');
  }
  return (
    <div className="App">
     <h1 onClick={() => handleClick()} style={styles} ref={textRef}>Demo {newNum}</h1>
     <Play />
     <Link to="/products">Products {value.isDarkMode}</Link>
    </div>
  );
}

export default App;
