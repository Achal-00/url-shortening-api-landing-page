export default function Description() {
  return (
    <div className="self-center text-center portrait:px-[5%] landscape:pl-[20%] landscape:text-left grid gap-6 landscape:col-start-1 landscape:col-end-2 landscape:row-start-1 landscape:row-end-2">
      <h1 className="text-4xl font-bold text-very-dark-blue landscape:lg:text-6xl">
        More than just
        <br />
        shorter links
      </h1>
      <p className="text-greyish-violet landscape:pr-20 landscape:text-lg">
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <button className="bg-cyan text-white py-3 w-40 rounded-full font-bold portrait:mx-auto hover:opacity-80">
        Get Started
      </button>
    </div>
  );
}
