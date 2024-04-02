import Image from "next/image";
import Page1 from "./navbar/page";
import Page2 from "./home/page.jsx";
import image from '../image/1.png'

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Page1/>
      <Page2/>
    </main>
  );
}
