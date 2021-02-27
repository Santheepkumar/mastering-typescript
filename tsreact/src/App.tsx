import "./App.css";
import { Field } from "./Field";

const App: React.FC = () => {
  return (
    <div className='App'>
      Hello TS
      <Field text="" fn={()=> "hello"} Person={{firstName: "asa",lastName: "dwwwwwww"}} />
    </div>

  );
};

export default App;
