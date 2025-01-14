import ReactMarkdown from "react-markdown"

export default function ForahiaRecipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Recipe Recommendation:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}