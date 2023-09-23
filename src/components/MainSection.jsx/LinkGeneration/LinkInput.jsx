export default function LinkInput(props) {
  async function callApi() {
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${props.url}`
      );
      const data = await response.json();
      if (data.ok) {
        localStorage.setItem(
          `shorturl-${data.result.code}`,
          JSON.stringify(data)
        );
        window.dispatchEvent(new Event("storage"));
      } else {
        alert("Oops something unexpected has occured :(");
      }
    } catch (error) {
      alert(error);
    }
  }

  function submitHandler() {
    var urlRegex =
      /[a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
    if (props.url.match(urlRegex)) {
      document.querySelector(".error-holder").classList.add("hidden");
      document.querySelector(".url-input").classList.remove("border-red");
      callApi();
    } else {
      document.querySelector(".error-holder").classList.remove("hidden");
      document.querySelector(".url-input").classList.add("border-red");
    }
  }

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
            className="w-full h-10 rounded-md portrait:text-sm pl-4 outline-none landscape:h-16 url-input border-2"
            onChange={(e) => props.setUrl(e.currentTarget.value)}
          />
          <p className="text-red text-xs italic pt-2 hidden error-holder">
            Please add a link
          </p>
        </div>
        <button
          onClick={submitHandler}
          className="h-10 bg-cyan w-full text-white font-bold rounded-md landscape:h-16 hover:brightness-110"
        >
          Shorten It!
        </button>
      </div>
    </div>
  );
}
