import axios from "axios";

const API = axios.create({
  baseURL: "https://nc-news-00jh.onrender.com/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const fetchArticles = () => {
  return API.get(`/articles`).then(({ data }) => {
    return data.articles;
  });
};

// const Article = ({ title, description }) => <h2>{title}</h2>;

// const ArticleList = ({ items }) => {
//   items.map((item) => <Article title={article.title}></Article>);
// };

// useEffect(() => {
//   fetchArticles().then((articles) => {
//     setArticles(articles);
//   });
// }, []);

// const Page = () => {
//   return (
//     <>
//       <ArticleList items={articles}></ArticleList>
//       <ArticleList items={articles.filter(date)}></ArticleList>
//       <ArticleList items={article.filter(raiting)}></ArticleList>
//     </>
//   );
// };
