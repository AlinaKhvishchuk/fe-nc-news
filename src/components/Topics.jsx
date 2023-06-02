import { useEffect, useState } from "react";
import { fetchTopics } from "../../utils";
import ArticleList from "./ArticleList";

const Topics = () => {
  const [currTopics, setCurrTopics] = useState();
  useEffect(() => {
    fetchTopics().then((topics) => setCurrTopics(topics));
  }, []);

  if (!currTopics) return null;

  if (currTopics) {
    return (
      <ul className="topics-list">
        {currTopics.map(({ slug, description }) => {
          return (
            <li key={slug}>
              <Link to></Link>
            </li>
          );
        })}
      </ul>
    );
  }
};
export default Topics;

//   // if (!categories) return null;

//   if (categories) {
//     return (
//       <ul id="category-list">
//         {categories.map(({ category_name }) => {
//           return (
//             <li key={category_name}>
//               <Link to={`/items?category=${category_name}`}>
//                 <div className="category-name">{category_name}</div>
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }
