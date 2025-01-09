import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-serif">
      <h1 className="text-center text-4xl">Langing Page</h1>
      <p>
        <Link href="/comunity">comunity</Link>
      </p>
      <p>
        <Link href="/meals">meals</Link>
      </p>
      <p>{/* <Link href="/meals/mealSulg">comunity</Link> */}</p>
    </div>
  );
}
