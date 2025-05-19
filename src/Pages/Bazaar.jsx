import React from "react";

const Bazaar = () => {
  const products = [
    {
      id: 1,
      name: "Rice Bowl Ayam Sayang",
      description: "Rice bowl ayam sayang adalah hidangan nasi dalam mangkuk yang disajikan dengan ayam goreng tepung renyah di atasnya. Ayam dilapisi adonan tepung berbumbu, lalu digoreng hingga garing, dan biasanya disiram saus seperti teriyaki, sambal, atau mayones pedas.",
      image: "/rice-bowl.jpg"
    },
    {
      id: 2,
      name: "Shiratama Dango",
      description: "Shiratama dango dengan krim adalah pencuci mulut khas Jepang yang terdiri dari bola-bola ketan kenyal, disajikan dengan krim manis di atasnya. Hidangan ini mengandalkan perpaduan tekstur lembut dango dan rasa manis krim.",
      image: "/shiratama-dango.jpg"
    },
    {
      id: 3,
      name: "Siomay Sawi Putih",
      description: "Siomay sawi putih adalah siomay kukus yang dibungkus dengan daun sawi putih, berisi adonan daging ayam yang dicampur wortel cincang dan daun bawang. Disajikan dengan saus tomat sebagai pelengkap.",
      image: "/siomay.jpg"
    },
    {
      id: 4,
      name: "Pudding Rasa Mantan",
      description: "Puding Rasa Mantan adalah hidangan penutup dengan tekstur lembut yang bisa dibentuk sesuka hati—kayak perasaan yang dulu sempat dibentuk bareng mantan. Disajikan dengan vla manis yang ngangenin (tapi nggak nyakitin).",
      image: "/pudding.jpg"
    },
    {
      id: 5,
      name: "Es Mamamelon",
      description: "Es Mamamelon adalah minuman segar yang terbuat dari campuran sari buah melon segar, sirup manis, dan soda Sprite dengan es batu. Perpaduan rasa manis dan aroma melon yang khas berpadu dengan sensasi berbuih dari Sprite.",
      image: "/es-mamamelon.jpg"
    }
  ];
  
  return (
    <div className="h-auto text-white px-4 md:px-[10%] py-12 bg-gradient-to-b from-transparent via-gray-900 to-transparent " id="Menu">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8" id="AngkaGradientBlue">         MENU BAZAAR       </h1>        
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-blue-400/40 hover:shadow-xl border border-blue-500/30 relative"
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-400 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-400 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-400 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-400 rounded-br-lg"></div>
            
            <div className="h-52 md:h-64 overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>
            
            <div className="p-6 relative">
              {/* Subtle blue accent line */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
              
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {product.name}
              </h3>
              <p className="text-gray-300 text-sm mb-0 text-justify">
                {product.description}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bazaar;