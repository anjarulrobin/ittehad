import React from "react";
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { AllUsers } from "./components/AllUsers";
import { GroupList } from "./components/GroupList";
import { Group } from "./components/Group";
import { SideBar } from "./components/SideBar";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Teachers } from "./components/Teachers";
import { Representetives } from "./components/Representetives";
import { Notifications } from "./components/Notifications";
import { PrivateRoute } from "./PrivateRoute";

function App() {
  return (
    <Router>
      <div className="">
        <div className="m-4">
          <img className="h-32 w-full" src={`${process.env.PUBLIC_URL}/madrasa.png`} alt="photo" />
          <p className="font-bold text-center mt-2"> Ittehad </p>
        </div>
        <div className="">
          <div className="container h-screen mx-2 my-2">
            <Routes>
              <Route path='/notifications'
                element={
                  <PrivateRoute >
                    <Notifications />
                  </PrivateRoute>
                }
              />
              <Route path='/groups/:groupId' element={
                <PrivateRoute>
                  <Group />
                </PrivateRoute>
              } />
              <Route path='/groups' element={
                <PrivateRoute>
                  <GroupList />
                </PrivateRoute>
              } />
              <Route path='/teachers' element={
                <PrivateRoute>
                  <Teachers />
                </PrivateRoute>
              } />
              <Route path='/representatives' element={
                <PrivateRoute>
                  <Representetives />
                </PrivateRoute>
              } />
              <Route path='/teachers-and-students' element={
                <PrivateRoute>
                  <AllUsers />
                </PrivateRoute>
              } />
              <Route path='*' element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              } />

              <Route path='/login' element={<Login />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router >

  );
}

export default App;
