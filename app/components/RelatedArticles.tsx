import type { RelatedArticle } from "../content/articles";

type RelatedArticlesProps = {
  articles: RelatedArticle[];
};

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <section className="related-section" aria-labelledby="related-title">
      <div className="related-inner">
        <p className="section-label">DÁL V ARCHIVU</p>
        <h2 id="related-title">Related articles</h2>
        <div className="related-grid">
          {articles.map((article, index) => (
            <a className="related-card" href="#" key={article.title} aria-disabled="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{article.title}</h3>
              <p>{article.label}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
