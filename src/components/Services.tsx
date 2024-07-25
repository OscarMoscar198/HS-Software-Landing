import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Colaboracion en el Codigo",
    description:
      "Nuestra filosofía de trabajo se basa en la colaboración. Utilizamos herramientas avanzadas para facilitar la codificación conjunta, permitiendo que nuestros desarrolladores trabajen en sinergia y entreguen productos de alta calidad.",
    icon: <ChartIcon />,
  },
  {
    title: "Gestion de Proyectos",
    description:
      "Mantén tus proyectos en el camino correcto con nuestras soluciones de gestión. Desde la asignación de tareas hasta el seguimiento del progreso, ofrecemos todo lo que necesitas para gestionar tus proyectos con éxito.",
    icon: <WalletIcon />,
  },
  {
    title: "Automatizacion de Tareas",
    description:
      "Para optimizar tu inversión, implementamos procesos de automatización que reducen los tiempos de desarrollo y minimizan errores, permitiéndonos entregar soluciones más rápidas y fiables.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Servicios Centrados{" "}
            </span>
            en el Cliente
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Nos enfocamos en entender y satisfacer tus necesidades específicas.
            Nuestra prioridad es brindarte un servicio personalizado que exceda
            tus expectativas y contribuya a tu éxito.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
