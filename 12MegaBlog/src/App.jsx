import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  //Once we logged in, data should be displayed otherwise state will be update as logout.
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData })); //sending data to reducer method in authslice.js
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          TODO
          {/* TODO: <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}
export default App;
