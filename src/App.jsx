import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/home-page";
import Header from "./components/header";
import Footer from "./components/footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
