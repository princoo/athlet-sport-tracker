import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import { isLoggedIn } from './utils/authUtils';
import AuthLayout from './layout/AuthLayout';
import UsersList from './pages/Users';
import ProtectedRoute from './components/ProtectedRoutes/ProtectedRoute';
import { UserRoleEnum } from './core/enum';
import SitesList from './pages/Sites';
import PlayersList from './pages/Players';
// import SelectSite from './pages/Players/SelectSite';
import Home from './pages/Home';
// import Tests from "./pages/tests";
import Tests from "./pages/tests/index copy";
import SessionsList from "./pages/Sessions";
import PlayerTests from "./pages/PlayerTests";
import Stats from "./pages/Stats";

function App() {
  // const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000);
  // }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageTitle title="Home Page" />
              <Home />
            </>
          }
        />
        {isLoggedIn() ? (
          <Route element={<DefaultLayout />}>
            {/* <DefaultLayout> */}
            <Route
              index
              element={
                <>
                  <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                  <ECommerce />
                </>
              }
            />
            <Route
              path="/calendar"
              element={
                <>
                  <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                  <Calendar />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                  <Profile />
                </>
              }
            />
            <Route
              path="/users"
              element={
                <ProtectedRoute
                  element={
                    <>
                      <PageTitle title="Users" />
                      <UsersList />
                    </>
                  }
                  requiredRole={[UserRoleEnum.HSO]}
                />
              }
            />
            <Route
              path="/sites"
              element={
                <ProtectedRoute
                  element={
                    <>
                      <PageTitle title="Sites" />
                      <SitesList />
                    </>
                  }
                  requiredRole={[
                    UserRoleEnum.HSO,
                    UserRoleEnum.TECHNICIAN,
                    UserRoleEnum.COACH,
                    UserRoleEnum.CEO,
                    UserRoleEnum.ADMIN,
                    UserRoleEnum.FOOTBALL_DIRECTOR,
                  ]}
                />
              }
            />
            <Route
              path="/players"
              element={
                <ProtectedRoute
                  element={
                    <>
                      <PageTitle title="Players" />
                      <PlayersList />
                    </>
                  }
                  requiredRole={[
                    UserRoleEnum.HSO,
                    UserRoleEnum.TECHNICIAN,
                    UserRoleEnum.COACH,
                    UserRoleEnum.CEO,
                    UserRoleEnum.ADMIN,
                    UserRoleEnum.FOOTBALL_DIRECTOR,
                  ]}
                />
              }
            />
            <Route
              path="/tests"
              element={
                <ProtectedRoute
                  element={
                    <>
                      <PageTitle title="Tests" />
                      <Tests />
                    </>
                  }
                  requiredRole={[
                    UserRoleEnum.HSO,
                    UserRoleEnum.ADMIN,
                  ]}
                />
              }
            />
            <Route
              path="/sessions"
              element={
                <ProtectedRoute
                  element={
                    <>
                      <PageTitle title="Sessions" />
                      <SessionsList />
                    </>
                  }
                  requiredRole={[
                    UserRoleEnum.HSO,
                    UserRoleEnum.COACH,
                    UserRoleEnum.ADMIN,
                  ]}
                />
              }
            />
            <Route
              path="/player/tests"
              element={
                <ProtectedRoute
                  element={
                    <>
                      <PageTitle title="Player Tests" />
                      <PlayerTests />
                    </>
                  }
                  requiredRole={[
                    UserRoleEnum.HSO,
                    UserRoleEnum.COACH,
                    UserRoleEnum.TECHNICIAN,
                    UserRoleEnum.ADMIN,
                  ]}
                />
              }
            />
            <Route
              path="/stats"
              element={
                <ProtectedRoute
                  element={
                    <>
                      <PageTitle title="Players Stats" />
                      <Stats />
                    </>
                  }
                  requiredRole={[
                    UserRoleEnum.HSO,
                    UserRoleEnum.COACH,
                    UserRoleEnum.TECHNICIAN,
                    UserRoleEnum.ADMIN,
                  ]}
                />
              }
            />
            <Route
              path="/forms/form-elements"
              element={
                <>
                  <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                  <FormElements />
                </>
              }
            />
            <Route
              path="/forms/form-layout"
              element={
                <>
                  <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                  <FormLayout />
                </>
              }
            />
            <Route
              path="/tables"
              element={
                <>
                  <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                  <Tables />
                </>
              }
            />
            <Route
              path="/settings"
              element={
                <>
                  <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                  <Settings />
                </>
              }
            />
            <Route
              path="/chart"
              element={
                <>
                  <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                  <Chart />
                </>
              }
            />
            <Route
              path="/ui/alerts"
              element={
                <>
                  <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                  <Alerts />
                </>
              }
            />
            <Route
              path="/ui/buttons"
              element={
                <>
                  <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                  <Buttons />
                </>
              }
            />
          </Route>
        ) : (
          <Route element={<AuthLayout />}>
            <Route
              path="/auth/signin"
              element={
                <>
                  <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                  <SignIn />
                </>
              }
            />
            <Route
              path="/auth/signup"
              element={
                <>
                  <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                  <SignUp />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/auth/signin" replace />} />
          </Route>
        )}
      </Routes>
    </>
  );
}

export default App;
