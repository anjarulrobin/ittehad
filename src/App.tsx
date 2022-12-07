import React, { lazy, Suspense } from "react";
import './App.css';
import {
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { register } from "./serviceWorkerRegistration";
const AllUsers = lazy(() => import("./components/AllUsers"));
const GroupList = lazy(() => import("./components/GroupList"));
const Group = lazy(() => import("./components/Group"));
const Login = lazy(() => import("./components/Login"));
const Home = lazy(() => import("./components/Home"));
const Teachers = lazy(() => import("./components/Teachers"));
const Representetives = lazy(() => import("./components/Representetives"));
const Notifications = lazy(() => import("./components/Notifications"));

function App() {
  return (
    <Suspense>
      <Router>
        <div className="flex justify-between m-10">
          <div className="font-extrabold text-white text-xl">
            ইত্তেহাদ
          </div>
          <div className="w-16">
            <svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.34 14.49L18.34 12.83C18.13 12.46 17.94 11.76 17.94 11.35V8.82C17.94 6.47 16.56 4.44 14.57 3.49C14.05 2.57 13.09 2 11.99 2C10.9 2 9.92 2.59 9.4 3.52C7.45 4.49 6.1 6.5 6.1 8.82V11.35C6.1 11.76 5.91 12.46 5.7 12.82L4.69 14.49C4.29 15.16 4.2 15.9 4.45 16.58C4.69 17.25 5.26 17.77 6 18.02C7.94 18.68 9.98 19 12.02 19C14.06 19 16.1 18.68 18.04 18.03C18.74 17.8 19.28 17.27 19.54 16.58C19.8 15.89 19.73 15.13 19.34 14.49Z" fill="white" />
              <path d="M14.83 20.01C14.41 21.17 13.3 22 12 22C11.21 22 10.43 21.68 9.88 21.11C9.56 20.81 9.32 20.41 9.18 20C9.31 20.02 9.44 20.03 9.58 20.05C9.81 20.08 10.05 20.11 10.29 20.13C10.86 20.18 11.44 20.21 12.02 20.21C12.59 20.21 13.16 20.18 13.72 20.13C13.93 20.11 14.14 20.1 14.34 20.07C14.5 20.05 14.66 20.03 14.83 20.01Z" fill="white" />
              <path d="M70 12C70 6.49 65.51 2 60 2C54.49 2 50 6.49 50 12C50 14.9 51.25 17.51 53.23 19.34C53.23 19.35 53.23 19.35 53.22 19.36C53.32 19.46 53.44 19.54 53.54 19.63C53.6 19.68 53.65 19.73 53.71 19.77C53.89 19.92 54.09 20.06 54.28 20.2C54.35 20.25 54.41 20.29 54.48 20.34C54.67 20.47 54.87 20.59 55.08 20.7C55.15 20.74 55.23 20.79 55.3 20.83C55.5 20.94 55.71 21.04 55.93 21.13C56.01 21.17 56.09 21.21 56.17 21.24C56.39 21.33 56.61 21.41 56.83 21.48C56.91 21.51 56.99 21.54 57.07 21.56C57.31 21.63 57.55 21.69 57.79 21.75C57.86 21.77 57.93 21.79 58.01 21.8C58.29 21.86 58.57 21.9 58.86 21.93C58.9 21.93 58.94 21.94 58.98 21.95C59.32 21.98 59.66 22 60 22C60.34 22 60.68 21.98 61.01 21.95C61.05 21.95 61.09 21.94 61.13 21.93C61.42 21.9 61.7 21.86 61.98 21.8C62.05 21.79 62.12 21.76 62.2 21.75C62.44 21.69 62.69 21.64 62.92 21.56C63 21.53 63.08 21.5 63.16 21.48C63.38 21.4 63.61 21.33 63.82 21.24C63.9 21.21 63.98 21.17 64.06 21.13C64.27 21.04 64.48 20.94 64.69 20.83C64.77 20.79 64.84 20.74 64.91 20.7C65.11 20.58 65.31 20.47 65.51 20.34C65.58 20.3 65.64 20.25 65.71 20.2C65.91 20.06 66.1 19.92 66.28 19.77C66.34 19.72 66.39 19.67 66.45 19.63C66.56 19.54 66.67 19.45 66.77 19.36C66.77 19.35 66.77 19.35 66.76 19.34C68.75 17.51 70 14.9 70 12ZM64.94 16.97C62.23 15.15 57.79 15.15 55.06 16.97C54.62 17.26 54.26 17.6 53.96 17.97C52.44 16.43 51.5 14.32 51.5 12C51.5 7.31 55.31 3.5 60 3.5C64.69 3.5 68.5 7.31 68.5 12C68.5 14.32 67.56 16.43 66.04 17.97C65.75 17.6 65.38 17.26 64.94 16.97Z" fill="white" />
              <path d="M60 6.92999C57.93 6.92999 56.25 8.60999 56.25 10.68C56.25 12.71 57.84 14.36 59.95 14.42C59.98 14.42 60.02 14.42 60.04 14.42C60.06 14.42 60.09 14.42 60.11 14.42C60.12 14.42 60.13 14.42 60.13 14.42C62.15 14.35 63.74 12.71 63.75 10.68C63.75 8.60999 62.07 6.92999 60 6.92999Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className="rounded-t-[48px] h-screen bg-white px-2 py-2">
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
      </Router >
    </Suspense>
  );
}

register({ onSuccess: (registration) => console.log('Service registered') });

export default App;
