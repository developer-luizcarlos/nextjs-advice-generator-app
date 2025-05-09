"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Quote } from "@/types/quotes.types";

const apiurl: string = process.env["NEXT_PUBLIC_API_URL"]!;

const Home: React.FC = () => {
  const [quote, setQuotes] = useState<Quote>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(apiurl);
      if (!response.ok) throw new Error("Error on retrieving content");
      const responseToJSON = await response.json();
      setQuotes(responseToJSON);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const setRandomQuote = () => fetchData();

  return (
    <div className="h-dvh bg-slate-900 flex items-center justify-center">
      <article className="bg-slate-800 p-8 rounded-xl min-w-[270px] w-[90%] max-w-[650px] min-h-[230px] flex flex-col items-center justify-between relative">
        <h2 className="text-green-300 text-xl text-center font-medium">
          {`${loading ? "Advice" : `Advice - ${quote?.author}`}`}
        </h2>
        <blockquote
          className={`before:content-['"'] after:content-['"'] leading-7 text-xl text-center font-bold text-blue-200 my-4`}
        >
          {`${loading ? "Loading..." : quote?.quote}`}
        </blockquote>
        <div className="w-full flex items-center gap-2">
          <span className="w-full h-[0.5px] bg-blue-200"></span>
          <span className="font-bold text-2xl text-blue-200">||</span>
          <span className="w-full h-[0.5px] bg-blue-200"></span>
        </div>
        <button
          className="absolute top-[90%] p-3 cursor-pointer bg-green-300 rounded-full transition outline-none duration-300 
             hover:shadow-[0_0_20px_hsl(150,100%,66%)] focus:shadow-[0_0_20px_hsl(150,100%,66%)]"
          onClick={setRandomQuote}
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
