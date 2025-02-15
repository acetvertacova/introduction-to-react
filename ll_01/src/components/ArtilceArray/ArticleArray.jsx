export default function ArticleArray({articles}) {

    return (
      <article>
        {articles.map((article) =>
            <div> 
                <h2>{article.title}</h2>
                <p>{article.text}</p>
            </div>
        )}
      </article>
    );
}