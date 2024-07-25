import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accesibilidad",
    description:
      "Nos aseguramos de que nuestras soluciones sean accesibles para todos, proporcionando interfaces intuitivas y fáciles de usar que cumplen con los más altos estándares de accesibilidad.",
  },
  {
    icon: <MapIcon />,
    title: "Comunidad",
    description:
      "Fomentamos una comunidad colaborativa y abierta, donde compartimos conocimientos y recursos para promover el crecimiento y el aprendizaje mutuo.",
  },
  {
    icon: <PlaneIcon />,
    title: "Escalabilidad",
    description:
      "Nuestras soluciones están diseñadas para crecer contigo. Ofrecemos estructuras escalables que se adaptan a tus necesidades cambiantes, asegurando un rendimiento óptimo a medida que tu proyecto se expande.",
  },
  {
    icon: <GiftIcon />,
    title: "Gamificacion",
    description:
      "Utilizamos técnicas de gamificación para hacer nuestras soluciones más atractivas, promoviendo un mayor nivel de compromiso y productividad.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Nuestro Metodo de{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Trabajo{" "}
        </span>
        Paso a Paso
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Nos enorgullecemos de nuestro enfoque meticuloso y estructurado para
        garantizar resultados de calidad en cada proyecto. Con un compromiso
        firme con la excelencia, nuestro proceso está diseñado para ser
        transparente y eficiente en cada etapa.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
