import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "¿Qué tipo de servicios ofrecen?",
    answer:
      "Ofrecemos desarrollo personalizado de páginas web y aplicaciones, con un enfoque en servicios centrados en el cliente, colaboración en código, gestión eficiente de proyectos y automatización de tareas.",
    value: "item-1",
  },
  {
    question: "¿Cómo se aseguran de que los proyectos se entreguen a tiempo?",
    answer:
      "Utilizamos métodos de gestión de proyectos transparentes y eficientes, manteniendo a nuestros clientes informados en cada etapa del desarrollo para garantizar que los plazos se cumplan.",
    value: "item-2",
  },
  {
    question: "¿Qué significa que sus servicios son centrados en el cliente?",
    answer:
      "Significa que priorizamos entender y satisfacer las necesidades específicas de cada cliente, ofreciendo soluciones personalizadas y soporte excepcional para asegurar su éxito.",
    value: "item-3",
  },
  {
    question: "¿Cómo fomentan la colaboración en código?",
    answer:
      "Utilizamos herramientas avanzadas de codificación colaborativa que permiten a nuestro equipo trabajar en tiempo real, compartir ideas y editar código conjuntamente, asegurando productos de alta calidad.",
    value: "item-4",
  },
  {
    question:
      "¿Qué beneficios ofrece la automatización de tareas en sus proyectos?",
    answer:
      "La automatización de tareas nos permite acelerar los procesos de desarrollo, reducir errores y liberar tiempo para enfocarnos en la innovación y la creación de soluciones de alta calidad.",
    value: "item-5",
  },
  // {
  //   question:
  //     "Aviso de Privacidad",
  //   answer:
  //     "La automatización de tareas nos permite acelerar los procesos de desarrollo, reducir errores y liberar tiempo para enfocarnos en la innovación y la creación de soluciones de alta calidad.",
  //   value: "item-5",
  // },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Preguntas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Frecuentes
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Aún tienes preguntas? Contactanos en{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          hs.entrenat@gmail.com
        </a>
      </h3>
    </section>
  );
};
