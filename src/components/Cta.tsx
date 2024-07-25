// import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid place-items-center text-center lg:text-left">
        <div className="lg:col-start-1">
          <h2 className="text-3xl text-center md:text-4xl font-bold">
            Todas Tus
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Ideas Y Conceptos{" "}
            </span>
            En Una Interfaz
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Transforma tus pensamientos en realidad con nuestra interfaz
            intuitiva y poderosa. Simplifica tus tareas y alcanza nuevos niveles
            de productividad.
          </p>
        </div>

        {/* <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Request a Demo</Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            View all features
          </Button>
        </div> */}
      </div>
    </section>
  );
};
