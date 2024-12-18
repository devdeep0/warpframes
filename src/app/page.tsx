"use client"
import { Metadata } from "next";

import Main from "~/components/Main";
const appUrl = process.env.NEXT_PUBLIC_URL;
import { useState, useEffect } from "react";



const frame = {
  version: "next",
  imageUrl: `${appUrl}/opengraph-image`,
  button: {
    title: "Ruture Labs",
    action: {
      type: "launch_frame",
      name: "Rupture Labs",
      url: appUrl,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
    },
  },
};

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Rupture Lbas",
    openGraph: {
      title: "Rupture Labs",
      description: "Play it out and enjoy",
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}



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
