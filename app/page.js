import Header from "./Components/header/header";
import ExportProducts from "./Components/products/products";
import Banner from './Components/hero-banner/hero-banner';
import Footer from "./Components/footer/footer";
import Whychoose from "./Components/whychoose/whychoose";


export default function Home () {
  return (
    <div className="w-full">
      <Header/>
      <main className="mt107 sm:px-3.5 xl:px-0">
        <Banner />
        <section className="max-w-6xl mx-auto drop-shadow-md">
          <div className='w-full'>
              <h1 className='text-2xl py-4'><span className="font-bold blueText" >SILIVERSAL</span>- Professionally Executed Exports and Imports</h1>
              <p className='text-sm'>
              SILIVERSAL is a reliable exporter of Fruits, Vegetables, Spices, Processed Food Products, Handmade Toys and Handicrafts. We work with artisans across India for best quality handmade products to export across the globe.
              
              </p>
          </div>
          </section>
        <ExportProducts />
      </main>
      <Whychoose/>
      <Footer />
    </div>
  );
}
