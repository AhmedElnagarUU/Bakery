import ProductCard from "./ProductCard";


interface Product {
  name: string;
  price: number;
  weight: number;
  image: string;
  hot?: boolean;
  new?: boolean;
  sale?: boolean;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  accent: "orange" | "blue" | "red";
}

export default function ProductGrid() {
  const customerFavorites: Product[] = [
    {
      name: "Whole Spelt",
      price: 6.0,
      weight: 390,
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600",
    },
    {
      name: "Mt Ida Multigrain",
      price: 6.0,
      weight: 350,
      image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600",
      hot: true,
    },
    {
      name: "Four Seed Whole Wheat",
      price: 5.0,
      weight: 420,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600",
    },
    {
      name: "Bagel Multigrain",
      price: 3.0,
      weight: 100,
      image: "https://images.unsplash.com/photo-1726733947933-a9e406f84d9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fEJhZ2VsJTIwTXVsdGlncmFpbnxlbnwwfHwwfHx8MA%3D%3Dcrop&w=600",
    },
  ];

  const newArrivals: Product[] = [
    {
      name: "Sourdough Baguette",
      price: 4.5,
      weight: 250,
      image: "https://media.istockphoto.com/id/1078294616/photo/homemade-artisan-loaf-of-sourdough-bread-broule-with-crust-on-a-wooden-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q9N3BtoY9CitFpdcoNkfGUON-hblTj1E40AeRFa4yRY=",
      new: true,
    },
    {
      name: "Olive Focaccia",
      price: 7.0,
      weight: 400,
      image: "https://images.unsplash.com/photo-1603445023295-ab5c07a403ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fE9saXZlJTIwRm9jYWNjaWF8ZW58MHx8MHx8fDA%3D",
      new: true,
    },
    {
      name: "Rustic Ciabatta",
      price: 5.5,
      weight: 300,
      image: "https://media.istockphoto.com/id/184979776/photo/artisan-salami-sandwich.webp?a=1&b=1&s=612x612&w=0&k=20&c=MTmMRS2liVxVKT6vP95BdKysNkcagyjQaX2bxtIq-4M=",
      new: true,
    },
    {
      name: "Artisan Rye",
      price: 6.5,
      weight: 450,
      image: "https://images.unsplash.com/photo-1657023102376-b575acc901d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhY2tlcnl8ZW58MHx8MHx8fDA%3D",
      new: true,
    },
  ];

  const specialOffers: Product[] = [
    {
      name: "Cranberry Walnut",
      price: 7.5,
      weight: 400,
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600",
      sale: true,
    },
    {
      name: "Cheese Crown",
      price: 4.0,
      weight: 150,
      image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=600",
      sale: true,
    },
    {
      name: "Chocolate Brioche",
      price: 5.0,
      weight: 200,
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fENob2NvbGF0ZSUyMEJyaW9jaGV8ZW58MHx8MHx8fDA%3D",
      sale: true,
    },
    {
      name: "Seed Loaf",
      price: 6.0,
      weight: 350,
      image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=600",
      sale: true,
    },
  ];

  const ProductSection = ({ title, products, accent }: ProductSectionProps) => (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-serif">{title}</h2>
        <button
          className={`px-4 py-2 rounded-lg ${
            accent === "orange"
              ? "bg-orange-500 hover:bg-orange-600"
              : accent === "blue"
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-red-500 hover:bg-red-600"
          } text-white`}
        >
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((product) => (
          <ProductCard id={""} key={product.name} {...product} />
        ))}
      </div>
    </div>
  );

  return (
    <>
     
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-16">
        <ProductSection 
          title="CUSTOMER FAVORITES" 
          products={customerFavorites} 
          accent="orange" 
        />
        <ProductSection 
          title="NEW ARRIVALS" 
          products={newArrivals} 
          accent="blue" 
        />
        <ProductSection 
          title="SPECIAL OFFERS" 
          products={specialOffers} 
          accent="red" 
        />
      </div>

      
    </>
  );
}
