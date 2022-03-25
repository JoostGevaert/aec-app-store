import * as React from 'react';
import { Link } from 'react-router-dom';
import { IArticle } from '../interfaces';

interface IProps {
  articles: IArticle[]
}

const ArticlesList = ({ articles }: IProps ): JSX.Element => {
  return (
    <>
      {articles.map((article, key: number) => (
        <Link
          key={key}
          className="article-list-item"
          to={`/article/${article.name}`}
        >
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </>
  );
  // Why are there these nice lines below the paragraphs?
}

export default ArticlesList
