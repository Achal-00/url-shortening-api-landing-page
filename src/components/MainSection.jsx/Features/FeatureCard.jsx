export default function FeatureCard(props) {
  return (
    <div className="bg-white text-center grid relative px-5 rounded-md landscape:text-left">
      <div className="relative w-max bg-dark-violet p-4 rounded-full left-1/2 portrait:-translate-x-1/2 top-0 -translate-y-1/2 landscape:left-0">
        <img src={props.image} alt="" />
      </div>
      <h1 className="text-very-dark-blue text-xl font-bold">{props.heading}</h1>
      <p className="pt-4 pb-12 text-greyish-violet">{props.content}</p>
    </div>
  );
}
