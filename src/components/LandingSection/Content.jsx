import Description from "./Description";
import HeroImage from "./HeroImage";

export default function Content() {
  return (
    <div className="grid portrait:grid-rows-2 landscape:grid-cols-2 overflow-hidden">
      <HeroImage />
      <Description />
    </div>
  );
}
