import FeatureCarousel from "@/components/FeatureCarousel";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Soluciones pensadas para ti
        </h2>

        <div className="mt-16">
      <FeatureCarousel>

        <ServiceCard
          category="55+"
          title="Contigo Senior"
          description="Protección y acompañamiento para disfrutar esta etapa con tranquilidad."
          imageSrc="/images/contigo-senior.png"
          ctaText="Más información"
        />

        <ServiceCard
          category="Ahorro"
          title="Plan Creciente SIALP"
          description="Invierte con garantía y aprovecha ventajas fiscales."
          imageSrc="/images/plan-creciente-sialp.png"
          ctaText="Solicitar simulación"
        />

        <ServiceCard
          category="Familia"
          title="Contigo Familia"
          description="Soluciones de protección para tu familia y su futuro."
          imageSrc="/images/contigo-familia.png"
          ctaText="Más información"
        />

        <ServiceCard
          category="Pensiones"
          title="Contigo Familia"
          description="Soluciones de protección para tu familia y su futuro."
          imageSrc="/images/contigo-senior2.png"
          ctaText="Más información"
        />
               
        <ServiceCard
          category="Familia"
          title="Contigo Familia"
          description="Soluciones de protección para tu familia y su futuro."
          imageSrc="/images/plan-pensiones.png"
          ctaText="Más información"
        />

      </FeatureCarousel>
        </div>

      </div>
    </section>
  );
}