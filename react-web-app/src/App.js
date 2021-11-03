import "./App.css";

function App() {
  return (
    <body>
      <div className="mainContainer">
        <button className="btnKlijent">
          <span className="txtKlijent"> ulaz klijent</span>
        </button>

        <button className="btnLogin">
          <span className="txtLogin">prijava djelatnici</span>
        </button>

        <div className="cloudShape">
          <div className="cs1"></div>
          <div className="cs2"></div>
          <div className="cs3"></div>
          <span className="txtCloud">Red u Red</span>
        </div>
        
      </div>
    </body>
  );
}

export default App;
