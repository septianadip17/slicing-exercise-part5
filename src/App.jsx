import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ResponsiveMenu from "./components/Navbar/ResponsiveMenu";
function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <ResponsiveMenu />
      </main>
    </>
  );
}

export default App;
