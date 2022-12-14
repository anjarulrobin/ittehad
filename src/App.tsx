import { lazy, Suspense, useEffect, useState } from "react";
import './App.css';
import {
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { register } from "./serviceWorkerRegistration";
import { getAppContextApi } from "./apis/getAppContext";
import { initFCM, onMessageListener } from "./components/Firebase";
import { AppContext } from "./contexts/app.context";
import { Loader } from "./components/Loader";

const UserFilter = lazy(() => import("./components/UserFilter"));
const Discussion = lazy(() => import("./components/Discussion"));
const Login = lazy(() => import("./components/Login"));
const Home = lazy(() => import("./components/Home"));
const Teachers = lazy(() => import("./components/Teachers"));
const Representetives = lazy(() => import("./components/Representetives"));
const Announcements = lazy(() => import("./components/Announcements"));
const User = lazy(() => import("./components/User"));
const Profile = lazy(() => import("./components/Profile"));
const Committee = lazy(() => import("./components/Committee"));
const Contact = lazy(() => import("./components/Contact"));
const AnnouncementDetails = lazy(() => import("./components/AnnouncementDetails"));
const CreateMessage = lazy(() => import("./components/CreateMessage"));
const AllUsers = lazy(() => import("./components/AllUsers"));
const Comments = lazy(() => import("./components/Comments"));
const CreateAnnouncement = lazy(() => import("./components/CreateAnnouncement"));
const Registration = lazy(() => import("./components/Registration"));
const SignupRequests = lazy(() => import("./components/SignupRequests"));
interface UserAppState {
  unReadNotifications?: number;
  role?: string;
}

function App() {
  const mainTitle = 'ইত্তেহাদ';
  const [appState, setAppState] = useState<UserAppState>({});
  const [title, setTitle] = useState<string>(mainTitle);
  const navigate = useNavigate();
  onMessageListener().then(payload => {
    if (payload?.data?.type === 'ANNOUNCEMENT') {
      const newContext = { ...appState };
      newContext.unReadNotifications = newContext.unReadNotifications || 0;
      newContext.unReadNotifications += 1;
      //@ts-ignore
      setAppState(newContext);
    }
  })
    .catch(err => console.log('failed: ', err));

  useEffect(() => {
    getAppContextApi()
      .then((user) => {
        if (user.code === 200) {
          user.data.id = user.data._id;
          setAppState({ ...appState, role: user?.data?.role, unReadNotifications: user?.data?.unReadNotifications });
          localStorage.setItem('user', JSON.stringify(user.data));
        }
        else {
          setAppState({});
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <AppContext.Provider value={{ title: mainTitle, setTitle }}>
        <div className="md:flex md:justify-center">
          <div>
            <div className="flex justify-between mt-4 mx-4">
              <div className="flex">
                {
                  title !== mainTitle
                  &&
                  (<div className="mr-3"
                    onClick={() => navigate(-1)}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.57 5.93005L3.5 12.0001L9.57 18.0701" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.5 12H3.67" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>)
                }
                <div className="font-ittehad-hind-shiliguri font-ittehad-title text-white text-xl">
                  {title}
                </div>
              </div>
              <div className="flex justify-between">
                <Link to="/announcement"
                  className="mr-1"
                >
                  <strong className="relative inline-flex items-center px-1 py-1 text-sm font-medium">
                    <span className={`${!appState?.unReadNotifications && 'hidden'} absolute -top-1 -right-1 h-5 w-5 flex justify-center bg-red-600 text-white rounded-lg items-center`}>
                      <span >{appState?.unReadNotifications}</span>
                    </span>
                    <svg width="24" height="24" viewBox="0 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.34 14.49L18.34 12.83C18.13 12.46 17.94 11.76 17.94 11.35V8.82C17.94 6.47 16.56 4.44 14.57 3.49C14.05 2.57 13.09 2 11.99 2C10.9 2 9.92 2.59 9.4 3.52C7.45 4.49 6.1 6.5 6.1 8.82V11.35C6.1 11.76 5.91 12.46 5.7 12.82L4.69 14.49C4.29 15.16 4.2 15.9 4.45 16.58C4.69 17.25 5.26 17.77 6 18.02C7.94 18.68 9.98 19 12.02 19C14.06 19 16.1 18.68 18.04 18.03C18.74 17.8 19.28 17.27 19.54 16.58C19.8 15.89 19.73 15.13 19.34 14.49Z" fill="white" />
                      <path d="M14.83 20.01C14.41 21.17 13.3 22 12 22C11.21 22 10.43 21.68 9.88 21.11C9.56 20.81 9.32 20.41 9.18 20C9.31 20.02 9.44 20.03 9.58 20.05C9.81 20.08 10.05 20.11 10.29 20.13C10.86 20.18 11.44 20.21 12.02 20.21C12.59 20.21 13.16 20.18 13.72 20.13C13.93 20.11 14.14 20.1 14.34 20.07C14.5 20.05 14.66 20.03 14.83 20.01Z" fill="white" />
                    </svg>
                  </strong>
                </Link>
                {
                  ['admin', 'superadmin'].includes(appState?.role || '') &&
                  <Link to='/signup-requests'
                    className="mr-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                    </svg>
                  </Link>
                }
                <Link to="/profile"
                  className=""
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z" fill="white" />
                    <path d="M12 6.92999C9.93 6.92999 8.25 8.60999 8.25 10.68C8.25 12.71 9.84 14.36 11.95 14.42C11.98 14.42 12.02 14.42 12.04 14.42C12.06 14.42 12.09 14.42 12.11 14.42C12.12 14.42 12.13 14.42 12.13 14.42C14.15 14.35 15.74 12.71 15.75 10.68C15.75 8.60999 14.07 6.92999 12 6.92999Z" fill="white" />
                  </svg>
                </Link>

              </div>
            </div>
            <div className="rounded-t-2xl rounded-b-2xl overflow-auto bg-white px-2 py-2">
              <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/registration/:page' element={<Registration />} />
                <Route element={<PrivateRoute />}>
                  <Route path='/signup-requests' element={<SignupRequests />} />
                  <Route path='/announcement' element={<Announcements />} />
                  <Route path='/announcement/create' element={<CreateAnnouncement />} />
                  <Route path='/announcement/:id' element={<AnnouncementDetails />} />
                  <Route path='/discussion/:postId/comments' element={<Comments />} />
                  <Route path='/discussion/create' element={<CreateMessage />} />
                  <Route path='/discussion/' element={<Discussion />} />
                  <Route path='/teachers' element={<Teachers />} />
                  <Route path='/representatives' element={<Representetives />} />
                  <Route path='/teachers-and-students' element={<UserFilter />} />
                  <Route path='/users/:userId' element={<User />} />
                  <Route path='/users/all' element={<AllUsers />} />
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/committee' element={<Committee />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='*' element={<Home />} />
                </Route>
              </Routes>
            </div>
          </div>

        </div>
      </AppContext.Provider >
    </Suspense>
  );
}

register();
initFCM();
export default App;
