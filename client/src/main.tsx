import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";
import HomePage from "./routes/homePage/HomePage.tsx";
import CreatePage from "./routes/createPage/CreatePage.tsx";
import PostPage from "./routes/postPage/PostPage.tsx";
import AuthPage from "./routes/authPage/AuthPage.tsx";
import SearchPage from "./routes/searchPage/SearchPage.tsx";
import ProfilePage from "./routes/profilePage/ProfilePage.tsx";
import MainLayout from "./routes/layouts/MainLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/pin/:id" element={<PostPage />} />          
          <Route path="/search" element={<SearchPage />} />
          <Route path="/:username" element={<ProfilePage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
