import Link from "next/link";
import { players } from "../../../data";

export default async function Player(props) {
  const params = await props.params;
  const playerId = parseInt(params.id);
  const player = players.find(p => p.id === playerId);

  if (!player) {
    return <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8"><h2 className="text-white text-2xl">Player not found</h2></div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-2xl mx-auto">
        <Link href="/players">
          <p className="text-blue-400 hover:text-blue-300 mb-6 cursor-pointer">← Back to Players</p>
        </Link>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-white shadow-lg">
          <h2 className="text-4xl font-bold mb-4">{player.name}</h2>
          <p className="text-lg text-green-100">Team: <span className="font-semibold">{player.team}</span></p>
        </div>
      </div>
    </div>
  );
}
