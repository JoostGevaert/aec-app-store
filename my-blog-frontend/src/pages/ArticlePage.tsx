import { useParams } from 'react-router-dom';
import { IArticle, IArticleUndefined } from '../interfaces';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import articles from './article-content';

const ArticlePage = (): JSX.Element => {
  let name = useParams().name;

  const selectedArticle = articles.find(article => article.name === name)
  if (!selectedArticle) return <NotFoundPage />

  const otherArticles: IArticle[] = articles.filter(article => article.name !== name)

  return (
    <div id="page-body">
      <h1>{selectedArticle.title}</h1>
      {selectedArticle.content.map((paragraph: string, key: number) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h2>Other Articles:</h2>
      <ArticlesList articles={otherArticles} />
    </div>
  )
}

export default ArticlePage;
