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

export const fetchSingleArticle = (article_id) => {
  return API.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};
export const fetchCommentsByArticleId = (article_id) => {
  return API.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};
