import csImage from "../assets/CompSci.jpeg";
import stdImage from "../assets/collegefootball.jpg";

import Student from "../assets/student.svg?react";
import StudentBg from "../assets/studentbg.svg?react";

import { ImSearch } from "react-icons/im";
import { FaThList } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import ProgramCard from "../components/ProgramCard.js";
import CourseCard from "../components/CourseCard.js";
import NewsCarousel from "../components/NewsCarousel.js";

function Home() {
  return (
    <div className="bg-linear-to-br from-zinc-50 to-slate-200 w-full flex flex-col lg:space-y-30 sm:space-y-3 space-y-5 ">
      {/* Main Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between px-5 my-5 md:max-2xl:my-20 md:px-8 h-fit">
        <div className="w-full md:w-1/2 flex items-center justify-center relative aspect-square md:aspect-auto">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute -translate-x-[5%] md:-translate-x-[5%] lg:-translate-x-[5%] 2xl:-translate-x-[5%] h-auto z-0">
              <StudentBg className="h-auto max-w-full xl:max-w-7xl 5k:max-w-max" />
            </div>

            {/* floating badges */}
            <div className="floating-div top-0 left-0 xl:left-20">
              <p className="text-text-secondary font-cta  md:max-xl:text-2xl xl:text-3xl  font-semibold w-fit">
                40K
              </p>
              <p className="small-text w-fit">Happy students</p>
            </div>
            <div className="floating-div right-0 xl:right-20">
              <p className="text-text-secondary font-cta  md:max-xl:text-2xl xl:text-3xl  font-semibold w-fit">
                40K
              </p>
              <p className="small-text w-fit">Happy students</p>
            </div>
            <div className="floating-div bottom-0 left-0 xl:left-16">
              <p className="text-text-secondary font-cta md:max-xl:text-2xl xl:text-3xl   font-semibold w-fit">
                40K
              </p>
              <p className="small-text  w-fit">Happy students</p>
            </div>

            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <Student className="w-4/5 h-auto md:w-full lg:w-3/5" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 h-fit px-5 md:px-8 text-center items-center space-y-6">
          <h1 className="main-title text-text-secondary font-bold mb-4 text-center">
            Empowering tomorrow's leaders
          </h1>
          <p className="body mb-6 text-center">
            Lorem ipsum dolor sit amet, consectetuer a dipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et
          </p>
          <button className="bg-secondary text-text-default px-5 py-3 rounded-md button-text hover:bg-secondary/90 transition">
            Join Us
          </button>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex flex-col space-y-12 items-center justify-center px-10 ">
        <section className="h-auto flex flex-col w-full space-y-5 my-12 md:max-2xl:my-20 2xl:my-20 xl:w-10/12">
          <div className="flex flex-col h-auto text-center items-center justify-center space-y-12">
            <h1 className="main-title text-text-secondary ">
              What do you wanna study?
            </h1>
            <p className="body">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et
            </p>
            <div className="flex drop-shadow-[0_5px_5px_rgba(113,113,113,0.40)] flex-row button-text text-text-light bg-primary items-center px-5 py-2 space-x-5 font-bold">
              <ImSearch className=" text-text-highlight" />
              <button>Search program</button>
            </div>
          </div>

          <div className="flex flex-col py-8 space-y-5">
            <h1 className="sub-title text-text-secondary w-full">
              Program list
            </h1>
            <div className="flex flex-col lg:flex-row space-y-1.5 md:space-x-2">
              <ProgramCard name="Computer science" image={csImage} />
              <ProgramCard name="Computer science" image={csImage} />
              <ProgramCard name="Computer science" image={csImage} />
            </div>
          </div>

          {/* Discover study options */}
          <div className="flex flex-col space-y-10 ">
            <div className="flex flex-col items-center space-y-3">
              <h1 className="section-title w-full text-center mb-4">
                Discover study options
              </h1>
              <p className="body text-center">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur
              </p>
            </div>

            <div className="flex flex-col w-full  lg:flex-row space-y-7 sm:2xl:space-y-0 md:space-x-2 justify-center">
              <CourseCard
                title="Undergraduate courses"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
                linkText="Discover Undergraduate courses"
              />
              <CourseCard
                title="Undergraduate courses"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
                linkText="Discover Undergraduate courses"
              />
              <CourseCard
                title="Undergraduate courses"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
                linkText="Discover Undergraduate courses"
              />
            </div>

            <div className="flex flex-row w-full justify-end">
              <button className="body text-text-secondary underline">
                See all
              </button>
            </div>
          </div>
        </section>

        {/** student life */}
        <section className="flex flex-col justify-center items-center my-10  bg-secondary w-full xl:w-10/12 ">
          <div
            className="flex flex-col justify-center w-full mb-5 bg-cover bg-center bg-blend-multiply bg-primary/70"
            style={{ backgroundImage: `url(${stdImage})` }}
          >
            <div className="flex flex-col items-center w-full h-full  justify-end py-20  text-center">
              <h1 className="main-title text-text-light">
                Student <span className="text-text-highlight">life</span>
              </h1>
              <p className="body px-4 text-text-light">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et
              </p>
            </div>
          </div>
          <div className="flex flex-col place-items-center justify-center bg-bg w-full h-fit pt-8 space-y-10 py-5">
            <div className=" flex flex-col items-center justify-center w-full h-fit text-center space-y-4">
              <div className="bg-primary  w-10 h-10 rounded-full flex flex-col justify-center items-center">
                <FaThList className="w-fit h-fit text-text-highlight" />
              </div>
              <h3 className="body text-text-secondary ">
                Personalized Learning
              </h3>
              <p className="small-text text-text-muted">
                Studnets protocols apart fro engagement learning
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center w-full h-fit text-center space-y-4">
              <div className="bg-primary  w-10 h-10 rounded-full flex flex-col justify-center items-center">
                <FaThList className="w-fit h-fit text-text-highlight" />
              </div>
              <h3 className="body text-text-secondary ">
                Personalized Learning
              </h3>
              <p className="small-text text-text-muted">
                Studnets protocols apart fro engagement learning
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center w-full h-fit text-center space-y-4">
              <div className="bg-primary  w-10 h-10 rounded-full flex flex-col justify-center items-center">
                <FaThList className="w-fit h-fit text-text-highlight" />
              </div>
              <h3 className="body text-text-secondary ">
                Personalized Learning
              </h3>
              <p className="small-text text-text-muted">
                Studnets protocols apart fro engagement learning
              </p>
            </div>
          </div>
        </section>

        {/** 6 schools */}
        <section className="flex flex-col w-full space-y-10 justify-center items-center xl:w-10/12">
          <div className="flex flex-col justify-end text-left px-5 items-center py-5 bg-[url(./assets/school.jpeg)] bg-primary/70 bg-cover bg-center bg-blend-multiply w-full h-96 ">
            <h1 className="main-title text-text-light w-full ">
              6 schools, <br></br>
              <span className="text-text-highlight">chose your future!</span>
            </h1>
            <p className="body text-text-light w-full">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et
            </p>
          </div>
          <div className="flex flex-col lg:flex-row-reverse w-full h-fit bg-primary">
            <div className="w-full bg-[url(./assets/uni.jpg)] bg-cover bg-center bg-slate-900/40 bg-blend-multiply h-68"></div>
            <div className="flex flex-col space-y-3 w-full justify-center px-5 py-5 text-left">
              <h2 className="sub-title text-text-light ">
                Faculty of engineering
              </h2>
              <p className="body text-text-light font-light ">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis,
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full h-fit bg-primary">
            <div className="w-full bg-[url(./assets/uni2.jpg)] bg-cover bg-center bg-slate-900/40 bg-blend-multiply h-68"></div>
            <div className="flex flex-col space-y-3 w-full justify-center px-5 py-5 text-left">
              <h2 className="sub-title text-text-light ">
                Faculty of engineering
              </h2>
              <p className="body text-text-light font-light ">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis,
              </p>
            </div>
          </div>
          <div className="flex flex-row border-2 rounded-2xl w-fit h-fit px-10 py-1 space-x-3">
            <button className="button-text text-text-secondary font-medium">
              Explore more
            </button>
            <MdArrowForward className="w-8 h-8" />
          </div>
        </section>

        <section className="h-fit w-full pb-15  xl:w-10/12">
          <h1 className="section-title text-text-secondary mb-4 text-center">
            News & Updates
          </h1>
          <div className="flex items-center justify-center">
            <NewsCarousel />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
