import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="h-dvh bg-slate-900 flex items-center justify-center">
      <article className="bg-slate-800 p-8 rounded-xl min-w-[250px] w-full max-w-[500px] flex flex-col items-center relative">
        <h2 className="text-green-300 text-xl text-center font-medium">
          Advice
        </h2>
        <blockquote
          className={`before:content-['"'] after:content-['"'] leading-7 text-xl text-center font-bold text-blue-200 my-4`}
        >
          Lorem ipsum dolor sit amet.
        </blockquote>
        <div className="w-full flex items-center gap-2">
          <span className="w-full h-[0.5px] bg-blue-200"></span>
          <span className="font-bold text-2xl text-blue-200">||</span>
          <span className="w-full h-[0.5px] bg-blue-200"></span>
        </div>
        <button
          className="absolute top-[90%] p-3 cursor-pointer bg-green-300 rounded-full transition duration-300 
             hover:shadow-[0_0_20px_hsl(150,100%,66%)]"
        >
          <Image
            src={"images/icon-dice.svg"}
            alt="dice"
            width={30}
            height={30}
          />
        </button>
      </article>
    </div>
  );
};

export default Home;
