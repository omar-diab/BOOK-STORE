import Image from "next/image";

type ImageType = {
  src: string;
  title: string;
  author: string;
};

type SliderProps = {
  images: ImageType[];
  duration: string | number;
};

const AutoSlider = ({ images, duration }: SliderProps) => {
  return (
    <div className="slider h-72 mt-10 flex overflow-hidden" id="services">
      <div
        className="flex gap-5 cursor-pointer animate-swipe hover:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s` }}
      >
        {[...images, ...images, ...images].map(
          ({ src, title, author }, index) => (
            <div
              key={index}
              className="flex flex-col items-start flex-shrink-0"
            >
              <Image
                src={src}
                alt={title}
                width={195}
                height={195}
                className="w-52 h-52 object-cover rounded-md"
              />
              <span className="pt-2">{title}</span>
              <span className="text-gray-400">{author}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AutoSlider;
