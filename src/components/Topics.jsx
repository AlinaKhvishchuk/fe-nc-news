import { useEffect, useState } from "react";
import { fetchTopics } from "../../utils";
import { Link } from "react-router-dom";
import ArticleList from "./ArticleList";

const Topics = () => {
  const [currTopics, setCurrTopics] = useState([]);
  useEffect(() => {
    fetchTopics().then((topics) => setCurrTopics(topics));
  }, []);

  if (!currTopics.length) return null;

  if (currTopics) {
    return (
      <ul className="topics-list">
        {currTopics.map(({ slug, description }) => {
          return (
            <li key={slug}>
              <Link to={`articles?topic=${slug}`}></Link>
              <div className="topic-name">{slug}</div>
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    );
  }
};
export default Topics;
