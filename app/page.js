import Image from "next/image";
import Slider from "./_components/Slider";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Footer from "./_components/Footer";

export default async function Home() {

  
  
  

  
  return (
    <div className="p-10 px-5 md:px-16">
      {/* Sliders */}
      <Slider/>
      {/* Category List */}
      <CategoryList/>
      {/* Product List */}
      <ProductList/>
      {/* Banner */}
      <Image src='/pruebita.png' width={1000} height={400}
      alt="banner"
      className="w-full h-[400px] object-contain"
      />

      {/* Footer */}
      <Footer/>
    </div>
  );
}
