import Link from "next/link";
import { teams } from "../../data";

export const revalidate = 60;

export default function Teams() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <p className="text-blue-400 hover:text-blue-300 mb-6 cursor-pointer">← Back to Home</p>
        </Link>

        <h2 className="text-4xl font-bold text-white mb-8">Teams</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teams.map(team => (
            <Link key={team.id} href={`/teams/${team.id}`}>
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg p-6 text-white shadow-lg transform hover:scale-105 transition cursor-pointer">
                <h3 className="text-2xl font-bold mb-2">{team.name}</h3>
                <p className="text-blue-100">Captain: {team.captain}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
