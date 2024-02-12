import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>ProjectX MDN - Next Js Bootcamp Project Demo</h1>
      <ul>
        <li><Link href="/tip-calculator">Tip Calculator App</Link></li>
      </ul>
    </div>
  );
}
