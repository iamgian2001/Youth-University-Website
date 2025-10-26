declare module "react-multi-carousel" {
  import * as React from "react";
  import {
    CarouselProps,
    ResponsiveType,
    CarouselInternalState,
  } from "react-multi-carousel/lib/types";

  // 👇 Re-declare Carousel properly as a React Component
  export default class Carousel extends React.Component<CarouselProps> {
    previous(slidesHavePassed: number): void;
    next(slidesHavePassed: number): void;
    goToSlide(slide: number, skipCallbacks?: boolean): void;
    state: CarouselInternalState;
  }

  export type { CarouselProps, ResponsiveType };
}
