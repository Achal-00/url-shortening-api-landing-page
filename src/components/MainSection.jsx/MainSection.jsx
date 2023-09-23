import Feature from "./Features/Feature";
import LinkGeneration from "./LinkGeneration/LinkGeneration";

export default function MainSection() {
  return (
    <section className="bg-gray-100 grid gap-16 portrait:py-[10%] landscape:pb-[10%] landscape:pt-[5%]">
      <LinkGeneration />
      <Feature />
    </section>
  );
}
