function Hero() {
  return (
    <header className="relative bg-hero bg-top bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center items-center w-full sm:gap-16 gap-0 h-[50vh]">
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="relative flex-1 flex justify-center gap-10 z-10">
        <h1 className="sm:text-6xl text-5xl font-bold leading-[120%] text-white text-center">
          Feel the Wonder of{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-christmas-red via-red-700 to-dark-red">
            Christmas
          </span>{' '}
          Movies
        </h1>
      </div>
    </header>
  );
}

export default Hero;
