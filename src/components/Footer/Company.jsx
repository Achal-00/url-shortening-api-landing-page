export default function Company() {
  return (
    <div className="grid gap-6">
      <p className="text-white font-bold">Company</p>
      <div className="grid gap-4">
        <p className="text-grey text-sm hover:text-cyan hover:cursor-pointer">
          About
        </p>
        <p className="text-grey text-sm hover:text-cyan hover:cursor-pointer">
          Our Team
        </p>
        <p className="text-grey text-sm hover:text-cyan hover:cursor-pointer">
          Careers
        </p>
        <p className="text-grey text-sm hover:text-cyan hover:cursor-pointer">
          Contact
        </p>
      </div>
    </div>
  );
}
