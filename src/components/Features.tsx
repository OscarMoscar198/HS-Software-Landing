import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Diseño Responsivo",
    description:
      "Nuestro diseño se adapta perfectamente a cualquier dispositivo, asegurando una experiencia de usuario óptima sin importar si estás en una computadora, tableta o teléfono móvil. La flexibilidad y accesibilidad son nuestras prioridades.",
    image: image4,
  },
  {
    title: "Interfaz Intuitiva",
    description:
      "Disfruta de una interfaz diseñada pensando en ti. Nuestra plataforma es fácil de usar y navegar, permitiéndote concentrarte en lo que realmente importa sin complicaciones ni curvas de aprendizaje empinadas.",
    image: image3,
  },
  {
    title: "Impulsado por IA",
    description:
      "Obtén información valiosa y accionable gracias a nuestra tecnología impulsada por inteligencia artificial. Analiza datos y descubre tendencias ocultas que pueden ayudarte a tomar decisiones informadas y estratégicas.",
    image: image,
  },
];

const featureList: string[] = [
  "Tema Oscuro/Claro",
  "Reviews",
  "Funciones",
  "Nuestro Equipo",
  "Diseño Responsivo",
  "Minimalista",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Diferentes{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Excelentes Funciones
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
