import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Route, BrowserRouter,Switch } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { Room } from "./pages/Room";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
      <ToastContainer/>

    </>
  );
}

export default App;
