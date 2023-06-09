import Nav from "./Nav";
import AllArticles from "./AllArticles";
import ArticlePage from "./ArticlePage";
import Topics from "./Topics";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../css/App.css";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/articles" element={<AllArticles />}></Route>
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="/topics" element={<Topics />} />
          {/* <Route path="/" element={<Home />}></Route>
          <Route path="/items/add" element={<PostAdd />}></Route>
          <Route path="/accounts" element={<Account />}></Route> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
