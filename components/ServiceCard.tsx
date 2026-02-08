type ServiceCardProps = {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  ctaText: string;
};

export default function ServiceCard({
  category,
  title,
  description,
  imageSrc,
  ctaText,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition p-6 flex flex-col h-full">

      {/* Imagen */}
      <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Texto */}
      <span className="mt-4 text-xs font-semibold tracking-wide text-orange-500 uppercase">
        {category}
      </span>

      <h3 className="mt-2 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-600 flex-grow">
        {description}
      </p>

      <button className="mt-6 self-start text-orange-500 font-semibold hover:underline">
        {ctaText} →
      </button>
    </div>
  );
}