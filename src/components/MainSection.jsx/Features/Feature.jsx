import FeatureCard from "./FeatureCard";
import Header from "./Header";

export default function Feature() {
  return (
    <div className="grid gap-20 portrait:px-[5%] landscape:px-[10%]">
      <Header />
      <div className="grid gap-20 relative landscape:lg:grid-cols-3 landscape:gap-8">
        <div className="w-2 h-full bg-cyan absolute left-1/2 -translate-x-1/2 landscape:hidden"></div>
        <div className="portrait:hidden absolute w-full h-2 bg-cyan top-1/2 -translate-y-1/2"></div>
        <div className="landscape:mt-0">
          <FeatureCard
            image="icon-brand-recognition.svg"
            heading="Brand Recognition"
            content="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
          />
        </div>
        <div className="landscape:mt-10">
          <FeatureCard
            image="icon-detailed-records.svg"
            heading="Detailed Records"
            content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
        </div>
        <div className="landscape:mt-20">
          <FeatureCard
            image="icon-fully-customizable.svg"
            heading="Fully Customizable"
            content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </div>
    </div>
  );
}
