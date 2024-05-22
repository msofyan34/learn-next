import Counter from "@/components/ui/counter";
import ItemCard from "@/components/ui/item-card";

export default function Home() {
  const linkImage = "https://cdn2.thecatapi.com/images";
  return (
    <main className="container mt-5">
      <div>
        <Counter />
      </div>
      <h1 className="mb-2 pl-1 text-left text-2xl font-bold text-gray-500 hover:underline">
        Cat List
      </h1>
      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ItemCard name="Abyssinian" imgCat={`${linkImage}/0XYvRd7oD.jpg`} />
        <ItemCard name="Bombay" imgCat={`${linkImage}/5iYq9NmT1.jpg`} />
        <ItemCard name="Cheetoh" imgCat={`${linkImage}/IFXsxmXLm.jpg`} />
        <ItemCard name="Donskoy" imgCat={`${linkImage}/3KG57GfMW.jpg`} />
        <ItemCard name="Balinese" imgCat={`${linkImage}/13MkvUreZ.jpg`} />
        <ItemCard name="Bambino" imgCat={`${linkImage}/5AdhMjeEu.jpg`} />
        <ItemCard name="Birman" imgCat={`${linkImage}/HOrX5gwLS.jpg`} />
        <ItemCard
          name="American Bobtail"
          imgCat={`${linkImage}/hBXicehMA.jpg`}
        />
      </div>
    </main>
  );
}
