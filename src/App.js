import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo";

//Funzione che se presente 'Theme' nel localStorage
// returna il suo valore o di default return 'light-mode'
const getFromLocalStorage = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } else {
    return "light-mode";
  }
};

function App() {
  const [theme,setTheme] = useState(getFromLocalStorage());

  const cambiaTema = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode")
    } else {
      setTheme("light-mode")
    }
  }

  useEffect(()=>{
    document.documentElement.className = theme;

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <section className="section-center">
      <div className="container">
        <h2>DARK MODE APP</h2>
        <button type="button" className="btn btn-dark" onClick={cambiaTema}>Cambia</button>
        <section className="row d-flex justify-content-center">
          {
            data.map(el => <Articolo key={el.id} {...el} />)
          }
        </section>
      </div>
    </section>
  );
}

export default App;
