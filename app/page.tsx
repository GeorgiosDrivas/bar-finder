import Nav from "@/components/Nav";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <>
      <Nav />
      <section className="flex flex-col items-center justify-center h-[calc(100vh-20rem)]">
        <h2 className="text-2xl mb-3">Search bars in your area</h2>
        <SearchBar />
      </section>
    </>
  );
}
