import { FaExternalLinkAlt } from "react-icons/fa";

interface NewsCardProps {
  imageUrl: string;
  tags: string[];
  title: string;
  description: string;
}

const NewsCard = ({ imageUrl, tags, title, description }: NewsCardProps) => {
  return (
    <div className="w-full min-md:w-11/12 bg-bg flex flex-col rounded-lg shadow-lg">
      {/* Image Section */}
      <div
        className="w-full h-48 md:h-72 lg:h-96 bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Content Section */}
      <div className="flex flex-col justify-between p-4 space-y-2 md:py-5 md:px-5 min-h-0 overflow-hidden">
        {/* Tags + Icon */}
        <div className="flex flex-row justify-between items-center space-x-4">
          <div className="flex flex-row text-text-default space-x-3 md:space-x-4">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="bg-secondary small-text font-body px-2 py-0.5 md:text-base lg:text-lg"
              >
                {tag}
              </p>
            ))}
          </div>
          <FaExternalLinkAlt className="text-text-default" />
        </div>

        {/* Title & Description */}
        <div className="text-justify">
          <h3 className="body text-text-secondary sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 line-clamp-2 break-keep">
            {title}
          </h3>
          <p className="font-body line-clamp-4 break-keep text-xs sm:text-sm md:text-base lg:text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
