// src/pages/Home.jsx
import Hero from "../components/Hero";
import Features from "../components/Home/Features";


export default function Home() {
  return (
     <main className="relative min-h-screen pt-12">
      <Hero />
        <Features />
      
    </main>
  );
}
