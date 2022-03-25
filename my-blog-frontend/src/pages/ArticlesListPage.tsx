import ArticlesList from '../components/ArticlesList';
import articles from './article-content';

const ArticlesListPage = (): JSX.Element => {
  return (
    <div id="page-body">
      <h1>Articles</h1>
      <ArticlesList articles={articles}/>
    </div>
  )
}

export default ArticlesListPage;
