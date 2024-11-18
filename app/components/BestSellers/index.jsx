import React from "react";

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: "Short puffer jacket",
      price: "$99.99",
      imageUrl: "https://image.hm.com/assets/hm/97/11/97115dfacea29db0bf92a7a100ae641619c2dcc6.jpg?imwidth=336",
    },
    {
      id: 2,
      name: "Button detail sweatshirt",
      price: "$49.99",
      imageUrl: "https://lp2.hm.com/hmgoepprod?set=source[/ed/ad/edad185e15082855bb3941cf1c92e6ba79894d43.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
    },
    {
      id: 3,
      name: "Oversized fleece hoodie",
      price: "$79.99",
      imageUrl: "https://lp2.hm.com/hmgoepprod?set=source[/0b/fe/0bfe0dd5139e48f42549b226578956b2d230dbe8.jpg],origin[dam],category[ladies_hoodiesswetshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
    },
    {
      id: 4,
      name: "Fringe-trimmed poncho",
      price: "$129.99",
      imageUrl: "https://lp2.hm.com/hmgoepprod?set=source[/17/58/1758370dbeb3197f8781d04413d8352aa8cf9241.jpg],origin[dam],category[ladies_accessories_sarongsponchos],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-16">
          {/* Left Column - Product Grid */}
          <div className="grid grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="overflow-hidden mb-4">
                  <img
                    className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                </div>
                <h3 className="text-lg font-light mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            ))}
          </div>

          {/* Right Column - Content */}
          <div className="relative h-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://image.hm.com/ffc/share/assets/2024/6000/6000_16.png?imwidth=2160')`,
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-30 text-white">
              <h2 className="text-5xl font-light mb-8">Best Sellers</h2>
              <p className="text-xl mb-8 max-w-md">
                Discover our most loved pieces that define style and comfort.
              </p>
              <button className="text-sm font-light border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors">
                Shop Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default BestSellers;
