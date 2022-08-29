import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/mainstack.png" width={50} height={50} alt="logo" />
      </div>
      <Link href={"/"}>
        <a>Home</a>
      </Link>
      <Link href={"/about"}>
        <a>About</a>
      </Link>
      <Link href={"/ninjas"}>
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
