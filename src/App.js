import './App.css';

function App() {
  return (
    <>
      {/* <div className="WSP-header">
        <img src='./images/WSPHeader.svg' alt='WSP logo'/>
      </div> */}

      <div className="wsp">
      <div className="wsp-container">
      <p className="text-header">WSP</p>
      <p className="text-title">Water Street Projects</p>
      <p className="text-descp">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et </p>
      <input
        className="input search"
        name="name"
        placeholder="Email"
      /> 
      <button type="button" className="button" style={{cursor: "pointer"}} >
        <span style={{color: '#293C2B'}}>CONNECT</span>
        </button >
      </div>
    </div>
    </>
  );
}

export default App;
