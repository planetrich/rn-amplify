import "./App.css";
import { Auth } from "aws-amplify";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => Auth.federatedSignIn({ provider: "Merck" })}>
          Sign In with Merck
        </button>
      </header>
    </div>
  );
}

export default App;
