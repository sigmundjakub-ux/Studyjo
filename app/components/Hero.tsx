import type { Article } from "../content/articles";

type HeroProps = {
  article: Article;
};

export function Hero({ article }: HeroProps) {
  const highlightedTitle = article.title.split(/(Omezuje|Redbull|Bboys\?)/g).map((part, index) => {
    if (part === "Omezuje" || part === "Redbull" || part === "Bboys?") {
      return (
        <span className="headline-highlight" key={`${part}-${index}`}>
          {part}
        </span>
      );
    }

    return part;
  });

  return (
    <section className="article-hero" aria-labelledby="article-title">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="kicker">{article.kicker}</p>
          <h1 id="article-title">{highlightedTitle}</h1>
          <p className="article-meta">
            <span>{article.author}</span>
            <span>{article.date}</span>
            <span>{article.readingTime}</span>
          </p>
        </div>
        <figure className="hero-media">
          <img src={article.heroImage.src} alt={article.heroImage.alt} width={900} height={820} />
          <figcaption>{article.heroImage.caption}</figcaption>
        </figure>
        <p className="dek">{article.perex}</p>
      </div>
    </section>
  );
}
