import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Sobre{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Nosotros
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                En HS Software, nos dedicamos a proporcionar
                soluciones innovadoras y de alta calidad que transforman ideas
                en realidades. Con un equipo de expertos apasionados, trabajamos
                incansablemente para satisfacer las necesidades de nuestros
                clientes, garantizando resultados excepcionales y una
                experiencia incomparable.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
