import Hero from "@/components/Hero";
import KeyFeature from "@/components/KeyFeature";
import Navbar from "@/components/Navbar";
import QualityFeature from "@/components/QualityFeature";
import Service from "@/components/Service";
import Team from "@/components/Team";
import TryProduct from "@/components/TryProduct";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <KeyFeature />
      <Service />
      <QualityFeature />
      <Team />
      <div className="sm:px-16 px-6">
        <TryProduct />
      </div>
    </main>
  );
}
