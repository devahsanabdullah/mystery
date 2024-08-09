export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };