import HomeFirst from "./components/Home_Page/HomeFirst";
import HomeSecond from "./components/Home_Page/HomeSecond";
import HomeThird from "./components/Home_Page/HomeThird";

export default function Home() {
  return (
    <main className="w-full">
      <HomeFirst />
      <HomeSecond />
      <HomeThird />
    </main>
  );
}
