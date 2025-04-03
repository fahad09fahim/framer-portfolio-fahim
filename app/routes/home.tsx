import Banner from "~/components/banner";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio | Fahim" },
    {
      name: "description",
      content: "Welcome to Web developer Fahim portfolio",
    },
  ];
}

export default function Home() {
  return (
    <div className=" mx-auto px-[1.5rem]">
      <Banner />
    </div>
  );
}
