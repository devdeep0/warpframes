
"use client";
import Main from "~/components/Main";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function BinanceLogin({
    searchParams,
  }: {
    searchParams: { signature: string; message: string };
  }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedGame, setSelectedGame] = useState("");
  
    const handleRedirect = useCallback((game: string) => {
      setIsLoading(true);
      setSelectedGame(game);
      const payload = JSON.stringify({
        signature: searchParams.signature,
        message: searchParams.message,
      });
      router.push(`/${game}?payload=${encodeURIComponent(payload)}`);
    }, [searchParams.signature, searchParams.message, router]);
  
    return (
     <>
     
  <Main
   isLoading={isLoading}
   selectedGame={selectedGame}
   onGameSelect={handleRedirect}
  />
     </>
    );
  }









































