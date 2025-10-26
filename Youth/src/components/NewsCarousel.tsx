import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import NewsCard from "./NewsCard.js";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 6000, min: 4000 },
    items: 8,
  },
  ultraWideDesktop: {
    breakpoint: { max: 4000, min: 3001 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const newsData = [
  {
    imageUrl: "/cc.jpg",
    tags: ["Agency", "Agency"],
    title: "Massa Vitae Toutor Condimentum Lacinia Quis",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus etLorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    imageUrl: "/cc.jpg",
    tags: ["Agency", "Agency"],
    title: "Massa Vitae Toutor Condimentum Lacinia Quis",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus etLorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    imageUrl: "/cc.jpg",
    tags: ["Agency", "Agency"],
    title: "Massa Vitae Toutor Condimentum Lacinia Quis",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus etLorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    imageUrl: "/cc.jpg",
    tags: ["Agency", "Agency"],
    title: "Massa Vitae Toutor Condimentum Lacinia Quis",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus etLorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    imageUrl: "/cc.jpg",
    tags: ["Agency", "AAAA"],
    title: "Massa Vitae Toutor Condimentum Lacinia Quis",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus etLorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
];

function NewsCarousel() {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className="flex flex-row"
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={false}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable={true}
      responsive={responsive}
    >
      {newsData.map((newsItem, index) => (
        <NewsCard
          key={index}
          imageUrl={newsItem.imageUrl}
          tags={newsItem.tags}
          title={newsItem.title}
          description={newsItem.description}
        />
      ))}
    </Carousel>
  );
}

export default NewsCarousel;
