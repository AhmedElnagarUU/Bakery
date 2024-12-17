import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex md:min-h-screen items-center justify-between px-8 py-16 bg-cover bg-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative max-w-xl z-10">
        <div className="mb-8">
         
          <h1 className="text-4xl font-serif mb-4">
            TRADITIONAL
            <br />
            ARTISAN BAKERY
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Little Red Hen is dedicated to producing locally crafted traditional
            baking and breads. Handmade fresh at sunrise, lovelier and more
            delicious than any bakery around. Baked locally under dedicated
            local ovens.
          </p>
        </div>
        <button className="bg-orange-400 text-white px-8 py-3 rounded hover:bg-orange-500 transition-colors">
          Shop Now
        </button>
      </div>

      {/* Floating Box (Right Side Content) */}
      <div className="relative z-10 hidden lg:block">
        <div className="bg-black/80 backdrop-blur-sm p-4 rounded">
          <p className="text-orange-400">Country Sourdough</p>
          <p className="text-2xl font-bold">$5.00</p>
        </div>
      </div>
    </div>
  );
}
