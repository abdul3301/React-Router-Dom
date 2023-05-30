import "./App.css";
import Nav from "./Nav";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Dunno />} />
      </Routes>
    </div>
  );
}

function Home() {
  return <main>This is Home</main>;
}
function Users() {
  return (
    <main>
      This is Users
      {/* <Outlet /> */}
      <Routes>
        <Route path=":id" element={<User />} />
        <Route path="me" element={<UserMe />} />
      </Routes>
    </main>
  );
}
function User() {
  return <main>This is User x</main>;
}
function UserMe() {
  return <main>This is All about me</main>;
}
function Dunno() {
  return <main>Donno this route</main>;
}

export default App;
