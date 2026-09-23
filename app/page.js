import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4">Tournament Website</h1>
        <p className="text-xl text-slate-300 mb-12">Cricket Tournament Management System</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/teams">
            <div className="bg-blue-600 hover:bg-blue-700 rounded-lg p-8 text-white shadow-lg transform hover:scale-105 transition cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">Teams</h2>
              <p className="text-blue-100">View all teams and captains</p>
            </div>
          </Link>

          <Link href="/players">
            <div className="bg-green-600 hover:bg-green-700 rounded-lg p-8 text-white shadow-lg transform hover:scale-105 transition cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">Players</h2>
              <p className="text-green-100">Browse all players</p>
            </div>
          </Link>

          <Link href="/matches">
            <div className="bg-purple-600 hover:bg-purple-700 rounded-lg p-8 text-white shadow-lg transform hover:scale-105 transition cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">Matches</h2>
              <p className="text-purple-100">Check live match scores</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
