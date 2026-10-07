const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#f7f5ef] px-6 py-24 text-[#172019] md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-16 grid gap-6 md:mb-20 md:grid-cols-12 md:items-end md:gap-8">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#172019]/60">
              About TIS
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="max-w-5xl text-balance text-4xl font-medium leading-[1.05] tracking-[-0.035em] md:text-6xl lg:text-7xl">
              Education that helps every student
              <span className="italic"> discover their potential.</span>
            </h2>
          </div>
        </div>

        
        <div className="grid gap-10 md:grid-cols-12">
          
          <div className="overflow-hidden md:col-span-7">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85"
              alt="A teacher leading a lesson in a classroom of attentive students"
              width="1400"
              height="933"
              loading="lazy"
              decoding="async"
              className="h-[420px] w-full object-cover transition-transform duration-700 motion-safe:hover:scale-105 md:h-[600px]"
            />
          </div>

          
          <div className="flex flex-col justify-between md:col-span-5 md:pl-10">
            <div>
              <p className="max-w-md text-base leading-7 text-[#172019]/70 md:text-lg">
                At Tula&apos;s International School, learning goes beyond
                academics. Students are encouraged to explore their interests,
                develop their strengths and grow into confident, independent
                learners.
              </p>

              <a
                href="#academics"
                className="mt-8 inline-flex rounded-full border border-[#172019]/25 px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-[#172019] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5ef]"
              >
                Discover our approach
              </a>
            </div>

            
            <div className="mt-16 border-t border-[#172019]/15 pt-6 md:mt-0">
              <p className="text-6xl font-medium tracking-tight md:text-8xl">
                22
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#172019]/60">
                Acres of campus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;