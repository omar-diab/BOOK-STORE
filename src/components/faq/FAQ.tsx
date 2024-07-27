import {
    Accordion,
    AccordionContent,
    AccordionPanel,
    AccordionTitle,
  } from "flowbite-react";
  
  const title = "Questions? Answers.";
  
  type FAQS = {
    q: string;
    a: string;
  };
  
  const faqs: FAQS[] = [
    {
      q: "What is Apple Books?",
      a: "Apple Books is a built-in app that lets you find, buy, listen to, and read audiobooks and ebooks all in one place. You can browse curated collections, top audiobooks, and top ebooks and even get personalized recommendations. If you can't find the app on your device, use the search function or look for Apple Books in the App Store.",
    },
    {
      q: "How much does Apple Books cost?",
      a: "The Apple Books app is free and there is no subscription. Audiobooks and ebooks are priced individually, and thousands of free audiobooks and ebooks are available. You can also sample audiobooks and ebooks for free while you browse.",
    },
    {
      q: "Can I play audiobooks on my devices?",
      a: "Yes. Audiobooks can be played on iPhone, iPad, CarPlay, Apple Watch, Mac, and Apple Vision Pro. You can even play audiobooks on a Bluetooth speaker from your iPhone.",
    },
    {
      q: "Can I pre-order an audiobook or ebook?",
      a: "Yes. You can use Apple Books to gift an audiobook or ebook to anyone. Search for the title and select the gift box symbol to complete the purchase.",
    },
  ];
  
  const FAQ = () => {
    return (
      <section className="text-gray-900 bg-[#e9e9e9] dark:bg-gray-900 dark:text-white -mt-[200px]" id="qaa">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
                {title}
            </h1>
            <Accordion collapseAll className="border-none">
                {faqs.map(({ q, a }, index) => (
                    <AccordionPanel key={index}>
                        <AccordionTitle className="text-gray-900 text-xl">{q}</AccordionTitle>
                        <AccordionContent>
                        <p className="mb-2 text-gray-700 dark:text-gray-400 text-left">{a}</p>
                        </AccordionContent>
                    </AccordionPanel>

                ))}
            </Accordion>
        </div>
      </section>
    );
  };
  
  export default FAQ;
  