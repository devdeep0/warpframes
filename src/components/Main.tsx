// Main.tsx
'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation' // Add this import
import Image from 'next/image'
import { client } from "../app/client";
import { useActiveAccount, useActiveWallet, useConnect } from "thirdweb/react";
import { EIP1193 } from "thirdweb/wallets";
import { shortenAddress } from "thirdweb/utils";
import sdk, {
  FrameNotificationDetails,
  type FrameContext,
} from "@farcaster/frame-sdk";

interface Main {
  isLoading: boolean;
  selectedGame: string;
  onGameSelect: (game: string) => void;
}

const Main: React.FC<Main> = ({ isLoading, selectedGame, onGameSelect }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<FrameContext>();
  const router = useRouter(); // Add this
  const address = useActiveAccount()?.address;
  const { connect } = useConnect();
  const wallet = useActiveWallet();
  const account = useActiveAccount();

  const connectWallet = useCallback(async () => {
    connect(async () => {
      // create a wallet instance from the Warpcast provider
      const wallet = EIP1193.fromProvider({ provider: sdk.wallet.ethProvider });
      
      // trigger the connection
      await wallet.connect({ client: client });
      
      // return the wallet to the app context
      return wallet;
    })
  }, [connect]);
  useEffect(() => {
    const load = async () => {
      setContext(await sdk.context);
      sdk.actions.ready({});
    };
    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
      if (sdk.wallet) {
        connectWallet();
      }
    }
  }, [isSDKLoaded, connectWallet]);
  
  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }
  

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const handleGameSelect = (game: string) => {
    addLog(`Button clicked for game: ${game}`);
    try {
      onGameSelect(game);
      addLog('Game select processed ✓');
      addLog('Attempting navigation to game page...');
      router.push(`/${game}`); // Add explicit navigation
      addLog('Navigation initiated ✓');
    } catch (error) {
      addLog(`Error: ${error}`);
    }
  };

  return (
    <div className="bg-[url('/bg/BG.png')] text-white min-h-screen w-full">
       {account?.address && 
          <div className="w-full flex justify-center items-center text-center">
            <p className="text-base text-slate-500">{shortenAddress(account.address)}</p>
          </div>
        }
      <div className="flex items-center justify-between rounded-xl border border-pink-500/30 bg-gradient-to-r from-pink-500/10 to-transparent p-3">
      <Image
              src="/gameimg/atlas.png"
              alt="Atlas"
              width={40}
              height={40}
              className="rounded-lg"
            />
        <div className="flex items-center gap-3">
          <span className="font-medium tracking-wide font-pop text-[14px]"> Block Puzzle</span>
        </div>
        <button 
          className="h-8 border-l border-pink-500/20 px-4 text-xs font-medium tracking-wider text-pink-500"
          onClick={() => handleGameSelect("unity2")}
          disabled={isLoading}
        >
          PLAY
        </button>
      </div>

      {/* Debug Logs */}
  
    </div>
  );
};

export default Main;