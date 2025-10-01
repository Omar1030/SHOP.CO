import FeedbackCard from "../../components/UI/feedback-card";

const RatingAndReviews = ({ product }) => {
  const targetProduct = product;

  return (
    <section id="rating-and-reviews" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
      {targetProduct.reviews.map((review, index) => (
        <FeedbackCard key={index} name={review.reviewerName} text={review.comment} date={review.date.split("T")[0]} rate={review.rating} />
      ))}
    </section>
  );
};

export default RatingAndReviews;
