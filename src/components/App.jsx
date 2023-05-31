import Nav from "./Nav";
import AllArticles from "./AllArticles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../css/App.css";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/articles" element={<AllArticles />}></Route>
          {/* <Route path="/" element={<Home />}></Route>
          <Route path="/items/add" element={<PostAdd />}></Route>
          <Route path="/accounts" element={<Account />}></Route> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
