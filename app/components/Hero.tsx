import Image from "next/image";
import type { Article } from "../content/articles";

type HeroProps = {
  article: Article;
};

export function Hero({ article }: HeroProps) {
  return (
    <section className="article-hero" aria-labelledby="article-title">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="kicker">{article.kicker}</p>
          <h1 id="article-title">{article.title}</h1>
          <p className="article-meta">
            <span>{article.author}</span>
            <span>{article.date}</span>
            <span>{article.readingTime}</span>
          </p>
          <p className="dek">{article.perex}</p>
        </div>
        <figure className="hero-media">
          <Image
            src={article.heroImage.src}
            alt={article.heroImage.alt}
            width={900}
            height={820}
            priority
          />
          <figcaption>{article.heroImage.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
