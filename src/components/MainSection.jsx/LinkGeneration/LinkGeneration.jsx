import { useEffect, useState } from "react";
import LinkCard from "./LinkCard";
import LinkInput from "./LinkInput";

export default function LinkGeneration() {
  const [url, setUrl] = useState("");
  const [state, setState] = useState(false);

  window.addEventListener("storage", () => {
    setState((prev) => !prev);
  });

  return (
    <div className="portrait:px-[5%] landscape:px-[10%] grid gap-4">
      <LinkInput url={url} setUrl={setUrl} />
      <div className="grid gap-4">
        {state !== !state &&
          Object.entries(localStorage).map((item, index) => (
            <LinkCard
              key={index}
              originalLink={JSON.parse(item[1]).result.original_link}
              shortLink={JSON.parse(item[1]).result.full_short_link}
            />
          ))}
      </div>
    </div>
  );
}
