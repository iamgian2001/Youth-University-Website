import { FaExternalLinkAlt } from "react-icons/fa";

const CourseCard = ({ title, description, linkText }) => {
  return (
    <div className="flex flex-col w-full h-fit bg-[#00274D]/10 text-center space-y-7 py-5 px-5">
      <h3 className="border-b-2 py-2 mini-title">{title}</h3>
      <p className="text-justify body sm:text-lg md:text-xl">{description}</p>
      <div className="flex flex-row items-center justify-center space-x-3 body">
        <FaExternalLinkAlt className="text-text-secondary" />
        <h4>{linkText}</h4>
      </div>
    </div>
  );
};

export default CourseCard;
