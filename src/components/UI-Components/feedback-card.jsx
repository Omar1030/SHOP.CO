export default function FeedbackCard(props) {
    return(
        <article id="feedback-card" className="border-1 border-gray-300 rounded-lg p-6 select-none h-full">
            <ul id="feedback-card-stars" className="list-none flex gap-1">
                <li><i className="fa-solid fa-star text-[#FFD43B]"></i></li>
                <li><i className="fa-solid fa-star text-[#FFD43B]"></i></li>
                <li><i className="fa-solid fa-star text-[#FFD43B]"></i></li>
                <li><i className="fa-solid fa-star text-[#FFD43B]"></i></li>
                <li><i className="fa-solid fa-star text-[#FFD43B]"></i></li>
            </ul>
            <h3 id="feedback-card-name" className="font-bold my-1">{props.name}</h3>
            <p id="feedback-card-text" className="text-(--text-gray)">{props.text}</p>
        </article>
    )
}