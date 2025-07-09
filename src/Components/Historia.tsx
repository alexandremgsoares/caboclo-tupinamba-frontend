function Historia() {
  return (
    <section
      id="centro"
      className="flex flex-col md:flex-row items-center px-4 py-8 gap-8 max-w-[1400px] mx-auto text-branco">
      <div className="md:w-1/2 w-full">
        <h1 className="font-bold text-5xl">Nossa história.</h1>
        <p className="mt-4 text-xl">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper
          nibh a sem tempus, a rhoncus ex laoreet. Vestibulum luctus magna a
          aliquet sodales. Morbi eget ultrices orci. Donec scelerisque lorem
          libero, nec mollis magna tincidunt tincidunt. In aliquet congue
          tincidunt. In hac habitasse platea dictumst. Phasellus mattis dictum
          ex. Ut id molestie velit. Nunc sed diam enim. Aenean placerat
          vulputate accumsan. Cras nec mauris purus. Suspendisse a lorem tortor.
          Vestibulum vulputate sapien est, non dignissim quam ornare in.
          Suspendisse ipsum dolor, luctus eget hendrerit vitae, convallis sit
          amet quam. Integer quis ex magna. Aliquam quam enim, ultricies at
          nulla vel, interdum egestas sem. Nullam mollis nisi quis feugiat
          tristique. Nullam at tristique arcu.{" "}
        </p>
      </div>
      <img
        className="w-full max-w-md md:max-w-none md:w-1/2 h-auto object-cover rounded-lg"
        src="../src/assets/altar.webp"
        alt="foto do nosso altar"
      />
    </section>
  );
}

export default Historia;
