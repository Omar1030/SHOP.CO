import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import FeedbackCard from "./components/UI-Components/feedback-card.jsx";

import "./assets/CSS/feeback.css";
import "swiper/css";
import "swiper/css/free-mode";

export default function Feedback() {
  return (
    <section id="feedback-section">
      <div className="container mx-auto px-4 py-[70px]">
        <h2 className="font-extrabold text-[1.7rem] md:text-[2rem] leading-[40px] tracking-tight mb-4">OUR HAPPY CUSTOMERS</h2>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          freeMode={true}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <FeedbackCard name="Sarah M." text="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations." />
          </SwiperSlide>
          <SwiperSlide>
            <FeedbackCard name="Alex K." text="Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions." />
          </SwiperSlide>
          <SwiperSlide>
            <FeedbackCard name="James L." text="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends." />
          </SwiperSlide>
          <SwiperSlide>
            <FeedbackCard name="Ahmed E." text="Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions." />
          </SwiperSlide>
          <SwiperSlide>
            <FeedbackCard name="Omar A." text="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations." />
          </SwiperSlide>
          <SwiperSlide>
            <FeedbackCard name="Menna H." text="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends." />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
