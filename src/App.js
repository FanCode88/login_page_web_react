import CreateCont from "./Components/CreateCont/CreateCont";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <LoginForm />
      <RegisterForm />
      <CreateCont/>
    </>
  );
}

export default App;
