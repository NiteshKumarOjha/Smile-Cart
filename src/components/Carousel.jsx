import { Left, Right } from "neetoicons";
import { Button } from "neetoui";
import { useState } from "react";
import classNames from "classnames";

const Carousel = ({ imageUrls, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const previousIndex =
      currentIndex == 0 ? imageUrls.length - 1 : currentIndex - 1;
    setCurrentIndex(previousIndex);
  };

  const handleNext = () => {
    const nextIndex =
      currentIndex == imageUrls.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="flex items-center">
        <Button
          className="shrink-0 focus-within:ring-0 hover:bg-transparent"
          icon={Left}
          style="text"
          onClick={handlePrevious}
        />
        <img
          alt={title}
          className=" h-56 max-h-56 w-80"
          src={imageUrls[currentIndex]}
        />
        <Button
          className="shrink-0 focus-within:ring-0 hover:bg-transparent"
          icon={Right}
          style="text"
          onClick={handleNext}
        />
      </div>

      <div className="flex space-x-1">
        {imageUrls.map((_, index) => (
          <span
            className={classNames(
              "neeto-ui-border-black neeto-ui-rounded-full h-3 w-3 cursor-pointer border",
              { "neeto-ui-bg-black": index === currentIndex }
            )}
            key={index}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
