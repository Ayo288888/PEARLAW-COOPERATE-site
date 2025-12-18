interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section
      className="relative w-full h-[400px] lg:h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : "linear-gradient(135deg, #131927 0%, #1e223f 100%)",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative flex flex-col items-center justify-center h-full px-6">
        <div className="flex flex-col items-center gap-4 max-w-2xl">
          <h1 className="font-montserrat font-bold text-white text-4xl lg:text-6xl text-center leading-tight">
            {title}
          </h1>
          <p className="font-montserrat font-medium text-brand-orange text-sm lg:text-base text-center tracking-widest">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
