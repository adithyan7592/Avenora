import GallerySection from "../components/GallerySection.jsx";

export default function Gallery() {
  return (
    <>
      <section className="bg-teal py-14 text-center text-white">
        <p className="gold-kicker">Moments —</p>
        <h1 className="mt-2 font-serif text-4xl">Gallery</h1>
        <p className="mx-auto mt-3 max-w-xl px-5 text-sm text-white/75">
          Scenes from the AVENORA inauguration — lamp lighting, ribbon cutting
          and the first steps of our journey.
        </p>
      </section>
      <GallerySection heading={false} showFilters compact={false} />
    </>
  );
}
