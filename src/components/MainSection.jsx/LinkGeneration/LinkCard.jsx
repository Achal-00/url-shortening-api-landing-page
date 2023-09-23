export default function LinkCard() {
  return (
    <div className="bg-white px-4 py-4 flex flex-col gap-4 landscape:flex-row landscape:justify-between landscape:items-center">
      <p className="text-very-dark-blue">https://www.frontendmentor.io</p>
      <div className="bg-greyish-violet w-full h-[0.01rem] landscape:hidden"></div>
      <div className="flex flex-col gap-4 landscape:flex-row landscape:items-center">
        <p className="text-cyan">https://rel.link/k4lKyk</p>
        <button className="bg-cyan text-white py-2 rounded-md portrait:w-full px-8 hover:opacity-80">
          Copy
        </button>
      </div>
    </div>
  );
}
