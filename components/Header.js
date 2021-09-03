import Link from "next/Link";
const Header = () => {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/teams/summer">
          <a>TEAMS/PROGRAMS</a>
        </Link>
        <Link href="/whatsHB">
          <a>WHAT'S HANDBALL</a>
        </Link>
        <Link href="/resources">
          <a>RESOURCES</a>
        </Link>
        <Link href="/gallery">
          <a>GALLERY</a>
        </Link>
        <Link href="/schedule">
          <a>SCHEDULE</a>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
