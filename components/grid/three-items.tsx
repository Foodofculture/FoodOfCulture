export function ThreeItemGrid() {
  const homepageItems = [
    {
      title: "Korean Glass Noodles",
      price: "₹350",
      image: "Food of culture_20260202_174604_0000.png",
      handle: "korean-glass-noodles",
    },
    {
      title: "Bitter Melon",
      price: "₹350",
      image: "/images/bitter-melon.jpg",
      handle: "bitter-melon",
    },
    {
      title: "Tortilla Kit",
      price: "₹350",
      image: "Food of culture_20260202_174604_0000.png",
      handle: "tortilla-kit",
    },
  ];

  return (
    <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
      {homepageItems.map((item, index) => (
        <div
          key={index}
          className={
            index === 0
              ? "md:col-span-4 md:row-span-2"
              : "md:col-span-2 md:row-span-1"
          }
        >
          <a
            className="relative block aspect-square h-full w-full"
            href={`#${item.handle}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-2 left-2 bg-white/80 p-1 rounded">
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm">{item.price}</p>
            </div>
          </a>
        </div>
      ))}
    </section>
  );
}
