import { FaBookOpen } from "react-icons/fa";

const title = (
  <>
    Read, Listen, Discover. <br /> All in one app.
  </>
);
const description =
  "Apple Books is the single destination to find, buy, and dive into audiobooks and ebooks. Browse curated collections and get personalized recommendations. Share your books with up to five family members.* All with no subscription or monthly commitment.";

const Hero = () => {
  return (
    <section className="text-gray-900 bg-[#e9e9e9] dark:bg-gray-900 dark:text-white">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <FaBookOpen className="mx-auto text-8xl bg-orange-400 py-3 px-4 mb-5 rounded-3xl text-white dark:bg-transparent border dark:border-orange-300" />
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Hero;
