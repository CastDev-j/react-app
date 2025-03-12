export const LazyPageTemplate = () => {
  return (
    <section className="container flex flex-col gap-6 min-h-[80vh] p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4">Lazy Page Template</h1>

      <p className="text-lg">
        This is a lazy loaded page template that can be used to create new
        pages.
      </p>

      <p className="text-xl font-semibold">lazy page [#]</p>

      <p className="text-base leading-relaxed">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        excepturi quisquam sequi, eum sed, sapiente, nisi minima molestias
        beatae ducimus perspiciatis fugiat ad nulla vitae sit ut! Voluptates, at
        vel!
      </p>
    </section>
  );
};
