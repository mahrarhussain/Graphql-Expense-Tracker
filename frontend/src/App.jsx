import React from "react";
import Header from "./components/ui/Header";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import NotFound from "./pages/NotFoundPage";

function App() {
  const authUser = true;
  return (
    <>
      {authUser && <Header />}
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/signup" element={<SignUpPage />} />
        {/* <Route path="/transaction/:id" element={<TransactionPage />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
