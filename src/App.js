import Welcome from "./pages/welcome/Welcome"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import ProtectedRoute from "./ProtectedRoute"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/welcome" component={Welcome}/>
         <Route path="/login" component={Login}/>
         <Route path="/register" component={Register} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute path="/profile/:userName" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
