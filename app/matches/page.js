import Link from "next/link";
import { matches } from "../../data";

export const dynamic = "force-dynamic";

export default function Matches() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <p className="text-blue-400 hover:text-blue-300 mb-6 cursor-pointer">← Back to Home</p>
        </Link>

        <h2 className="text-4xl font-bold text-white mb-8">Live Matches</h2>

        <div className="space-y-4">
          {matches.map(match => (
            <div key={match.id} className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-3">{match.match}</h3>
              <p className="text-lg text-purple-100">Score: <span className="font-semibold">{match.score}</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
