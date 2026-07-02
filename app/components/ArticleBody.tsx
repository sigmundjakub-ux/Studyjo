import type { Article, ArticleBlock } from "../content/articles";

type ArticleBodyProps = {
  article: Article;
};

function renderBlock(block: ArticleBlock) {
  if (block.type === "quote") {
    return (
      <aside className="pull-quote" key={block.id} aria-label="Zvýrazněná citace">
        <span>CITACE</span>
        <p>{block.text}</p>
      </aside>
    );
  }

  if (block.type === "image") {
    return (
      <figure className="article-image" key={block.id}>
        <img src={block.src} alt={block.alt} width={900} height={675} />
        <figcaption>{block.caption}</figcaption>
      </figure>
    );
  }

  return <p key={block.id}>{block.text}</p>;
}

export function ArticleBody({ article }: ArticleBodyProps) {
  return (
    <article className="article-shell" id="article" aria-labelledby="article-title">
      <div className="article-content">{article.blocks.map(renderBlock)}</div>
    </article>
  );
}
