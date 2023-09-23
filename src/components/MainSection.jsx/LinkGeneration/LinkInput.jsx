export default function LinkInput() {
  return (
    <div className="bg-dark-violet grid rounded-lg">
      <img
        src="bg-shorten-mobile.svg"
        alt=""
        className="col-start-1 col-end-2 row-start-1 row-end-2 justify-self-end rounded-tr-lg landscape:hidden"
      />
      <img
        src="bg-shorten-desktop.svg"
        alt=""
        className="col-start-1 col-end-2 row-start-1 row-end-2 w-full rounded-lg portrait:hidden"
      />
      <div className="portrait:px-8 portrait:py-8 col-start-1 col-end-2 row-start-1 row-end-2 grid gap-4 landscape:grid-cols-[0.8fr_0.2fr] landscape:content-center landscape:px-16">
        <div>
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="w-full h-10 rounded-md portrait:text-sm pl-4 outline-none landscape:h-16"
          />
          <p className="text-red text-xs italic pt-2 hidden">
            Please add a link
          </p>
        </div>
        <button className="h-10 bg-cyan w-full text-white font-bold rounded-md landscape:h-16 hover:brightness-110">
          Shorten It!
        </button>
      </div>
    </div>
  );
}
