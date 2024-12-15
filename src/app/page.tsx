"use client"
import { Metadata } from "next";

import Main from "~/components/Main";
const appUrl = process.env.NEXT_PUBLIC_URL;
import { useState } from "react";




export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGame, setSelectedGame] = useState('');

  const handleGameSelect = (game: string) => {
    setIsLoading(true);
    setSelectedGame(game);
    // Add your game loading/routing logic here
    setIsLoading(false);
  };

  return (
    <>
    <Main
     isLoading={isLoading}
      selectedGame={selectedGame}
      onGameSelect={handleGameSelect}/>
    </>
  );
}
