type FeatureBlockProps = {
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  fit?: "cover" | "contain" | "fill";
  reverse?: boolean;
};

export default function FeatureBlock({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  imageSrc,
  fit = "fill",
  reverse = false,
}: FeatureBlockProps) {
  return (
    <section className="min-w-[85%] md:min-w-[32%]">
      <div
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-8 items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Imagen */}
        <div className="relative h-[300px] rounded-3xl overflow-hidden bg-gray-100">
          <img
            src={imageSrc}
            alt={title}
            className={`w-full h-full ${
              fit === "cover"
                ? "object-cover"
                : fit === "contain"
                ? "object-contain"
                : "object-fill"
            }`}
          />
        </div>

        {/* Texto */}
        <div>
          {subtitle && (
            <span className="inline-block mb-4 text-sm font-semibold tracking-wide text-orange-500 uppercase">
              {subtitle}
            </span>
          )}

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {title}
          </h2>

          <p className="mt-6 text-gray-700 text-lg">
            {description}
          </p>

          <a
            href={ctaHref}
            className="inline-flex items-center mt-8 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}