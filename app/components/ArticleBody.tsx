import Script from "next/script";
import type { Article, ArticleBlock } from "../content/articles";

type ArticleBodyProps = {
  article: Article;
};

function renderBlock(block: ArticleBlock) {
  if (block.type === "quote") {
    return (
      <aside className="pull-quote" key={block.id} aria-label="Zvýrazněná citace">
        <p>{block.text}</p>
      </aside>
    );
  }

  if (block.type === "image") {
    const image = <img src={block.src} alt={block.alt} width={900} height={675} />;

    return (
      <figure className="article-image" key={block.id}>
        {block.href ? (
          <a href={block.href} target="_blank" rel="noreferrer">
            {image}
          </a>
        ) : (
          image
        )}
        <figcaption>{block.caption}</figcaption>
      </figure>
    );
  }

  if (block.type === "instagram") {
    return (
      <div className="instagram-embed" key={block.id}>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={block.url}
          data-instgrm-version="14"
        >
          <a href={block.url} target="_blank" rel="noreferrer" aria-label={block.title} />
        </blockquote>
        <Script src="https://www.instagram.com/embed.js" strategy="afterInteractive" />
      </div>
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
