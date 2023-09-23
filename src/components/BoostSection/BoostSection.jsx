export default function BoostSection() {
  return (
    <section className="bg-dark-violet grid">
      <img
        src="bg-boost-mobile.svg"
        alt=""
        className="w-full col-start-1 col-end-2 row-start-1 row-end-2 landscape:hidden"
      />
      <img
        src="bg-boost-desktop.svg"
        alt=""
        className="w-full col-start-1 col-end-2 row-start-1 row-end-2 portrait:hidden"
      />
      <div className="col-start-1 col-end-2 row-start-1 row-end-2 self-center portrait:px-[5%] text-center grid gap-6">
        <h1 className="text-white text-2xl font-bold landscape:lg:text-4xl">
          Boost your links today
        </h1>
        <button className="bg-cyan text-white font-bold justify-self-center py-4 px-8 rounded-full hover:brightness-110">
          Get Started
        </button>
      </div>
    </section>
  );
}
