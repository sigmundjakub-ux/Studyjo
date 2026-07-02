import { ArticleBody } from "./components/ArticleBody";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { RelatedArticles } from "./components/RelatedArticles";
import { articles } from "./content/articles";

export default function Home() {
  const article = articles[0];

  return (
    <>
      <Header />
      <main>
        <Hero article={article} />
        <ArticleBody article={article} />
        <RelatedArticles articles={article.related} />
      </main>
      <Footer />
    </>
  );
}
