export default function Ui() {
    return (
      <div className="min-h-screen bg-[#000814] text-white">
        <div className="mx-auto max-w-sm">
          <div className="relative min-h-screen bg-[#020B2D] px-6 py-4">
            {/* Top Navigation */}
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold">RL</div>
              <div className="h-8 w-8 rounded-full bg-white"></div>
              <div className="text-xl">W</div>
            </div>
  
            {/* Sphere Container */}
            <div className="relative mt-12">
              <div className="relative mx-auto aspect-square w-48 rounded-3xl border border-[#1a237e]/20 bg-[#020B2D] p-8 shadow-[0_0_15px_rgba(66,65,255,0.25)]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#4241ff]/10 to-transparent"></div>
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Wireframe Sphere"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
  
            {/* List Progress */}
            <div className="mt-12">
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold">LIST</span>
                <div className="flex flex-1 items-center gap-1 px-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-0.5 w-2 ${
                        i === 10 ? "bg-red-500" : "bg-white/20"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Trailblazer Section */}
            <div className="mt-8">
              <div className="flex items-center justify-between rounded-xl bg-[#0A1238] p-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-500/20"></div>
                  <span className="font-semibold">TRAILBLAZER</span>
                </div>
                <button className="rounded-lg border border-[#4241ff] px-6 py-2 text-sm font-medium text-[#4241ff]">
                  PLAY
                </button>
              </div>
            </div>
  
            {/* Leaderboard Section */}
            <div className="mt-12 text-center">
              <div className="inline-block rounded-lg border border-[#4241ff]/30 bg-[#0A1238] px-6 py-3 shadow-[0_0_15px_rgba(66,65,255,0.15)]">
                <span className="text-sm font-medium">Leaderboard Coming Soon</span>
              </div>
            </div>
  
            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pb-4 pt-8">
              <div className="mx-auto flex max-w-sm items-center justify-between px-12">
                <button className="text-white/60">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </button>
                <button className="rounded-full bg-white p-4 text-[#020B2D] shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </button>
                <button className="text-white/60">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  