import ArticleArray from "./ArticleArray"

export default function ArticleListUsingArray() {
    
    const articles = [
        {
            "title": "Benefits of Morning Exercise",
            "text": "Morning workouts boost energy and improve mental focus for the entire day."
        },
        {
            "title": "The Future of Remote Work",
            "text": "Remote work is becoming permanent as companies see increased productivity and reduced costs."
        },
        {
            "title": "Understanding AI",
            "text": "AI tools are now essential in daily life, from phones to smart homes."
        },
        {
            "title": "Sustainable Living Tips",
            "text": "Simple habits like using reusable bags and composting help protect the environment."
        }
    ]

    return(
        <ArticleArray articles={articles} />
    )
}
