import Link from "next/link";
import { players } from "../../data";

export const revalidate = 60;

export default function Players() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <p className="text-blue-400 hover:text-blue-300 mb-6 cursor-pointer">← Back to Home</p>
        </Link>

        <h2 className="text-4xl font-bold text-white mb-8">Players</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {players.map(player => (
            <Link key={player.id} href={`/players/${player.id}`}>
              <div className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-lg p-6 text-white shadow-lg transform hover:scale-105 transition cursor-pointer">
                <h3 className="text-2xl font-bold mb-2">{player.name}</h3>
                <p className="text-green-100">Team: {player.team}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
