import LinkCard from "./LinkCard";
import LinkInput from "./LinkInput";

export default function LinkGeneration() {
  return (
    <div className="portrait:px-[5%] landscape:px-[10%] grid gap-4">
      <LinkInput />
      <div className="grid gap-4">
        <LinkCard />
        <LinkCard />
        <LinkCard />
      </div>
    </div>
  );
}
