import './App.css';
import Sidebar from './Componets/Sidebar';
import Topbar from './Componets/Topbar';
import Dashboard from './Componets/Dashboard';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import User from './Componets/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUser from './Componets/CreateUser';
import ViewUser from './Componets/ViewUser';
import EditUser from './Componets/EditUser';
import Home from './Componets/Home';

function App() {

  let data = {
    monthly: "60000",
    annual: "100000",
    task: "100",
    Pending: "20"
  }
  return <>
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar></Sidebar>

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/dashboard" element={<Dashboard data={data} />} />
                <Route path="/user" element={<User />} />
                <Route path="/createuser" element={<CreateUser />} />
                <Route path="/viewuser/:id" element={<ViewUser />} />
                <Route path="/edituser/:id" element={<EditUser />} />
                

              </Routes>
            </div>

          </div>
        </div>
      </div>
    </BrowserRouter>


  </>


}

export default App;
