export default function LinkCard(props) {
  async function copyHandler(e) {
    try {
      await navigator.clipboard.writeText(props.shortLink);
      e.target.textContent = "Copied";
      e.target.classList.replace("bg-cyan", "bg-dark-violet");
      setTimeout(() => {
        e.target.textContent = "Copy";
        e.target.classList.replace("bg-dark-violet", "bg-cyan");
      }, 2000);
    } catch (error) {
      alert("Failed to copy :(");
    }
  }

  return (
    <div className="bg-white px-4 py-4 flex flex-col gap-4 landscape:flex-row landscape:justify-between landscape:items-center">
      <p className="text-very-dark-blue">{props.originalLink}</p>
      <div className="bg-greyish-violet w-full h-[0.01rem] landscape:hidden"></div>
      <div className="flex flex-col gap-4 landscape:flex-row landscape:items-center">
        <a href={props.shortLink} className="text-cyan" target="_blank">
          {props.shortLink}
        </a>
        <button
          className="bg-cyan text-white py-2 rounded-md portrait:w-full px-8 hover:opacity-80 copy-button"
          onClick={copyHandler}
        >
          Copy
        </button>
      </div>
    </div>
  );
}
