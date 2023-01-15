import Link from "next/link";

export default function Nav() {
  return (
    <nav style={{ display: "flex", justifyContent: "center", paddingTop: 24 }}>
      <Link href={`/`}>/</Link>
      <Link href={`/music`} style={{ marginLeft: 12 }}>
        /music
      </Link>
      <Link href={`/development`} style={{ marginLeft: 10 }}>
        /development
      </Link>
    </nav>
  );
}
