import React from "react";
import Left from "./home/Leftpart/Left";
import Right from "./home/Rightpart/Right";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div className="flex h-screen">
      <Left />
      <Right />
    </div>
    //<Signup></Signup>
    //<Login></Login>
  );
}

export default App;
