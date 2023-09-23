import Company from "./Company";
import Features from "./Features";
import Logo from "./Logo";
import Resources from "./Resources";
import Socials from "./Socials";

export default function Footer() {
  return (
    <section className="bg-very-dark-violet grid gap-12 text-center px-[5%] py-[20%] landscape:lg:px-[10%] landscape:py-[5%] landscape:lg:grid-cols-[0.4fr_0.2fr_0.2fr_0.2fr_0.2fr] landscape:lg:text-left landscape:lg:items-start">
      <Logo />
      <Features />
      <Resources />
      <Company />
      <Socials />
    </section>
  );
}
