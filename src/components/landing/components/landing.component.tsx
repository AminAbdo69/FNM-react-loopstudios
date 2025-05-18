import { Header } from "../../header";

export const Landing = () => {
  return (
    <section className="relative min-h-screen w-full bg-[url('../../../assets/desktop/image-hero.jpg')] md:bg-[url('../../../assets/mobile/image-hero.jpg')] bg-cover bg-center bg-no-repeat px-10 py-5">
      <Header />
      <div className="container mx-auto px-6 pt-32 md:pt-40">
        <div className="max-w-[650px] border-2 border-white p-6 md:p-10">
          <h1 className="text-4xl md:text-7xl text-white uppercase font-light leading-tight">
            Immersive experiences that deliver
          </h1>
        </div>
      </div>
    </section>
  );
};
