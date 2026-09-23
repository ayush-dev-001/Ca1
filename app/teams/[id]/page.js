import Link from "next/link";
import { teams } from "../../../data";

export default async function Team(props) {
  const params = await props.params;
  const teamId = parseInt(params.id);
  const team = teams.find(t => t.id === teamId);

  if (!team) {
    return <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8"><h2 className="text-white text-2xl">Team not found</h2></div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-2xl mx-auto">
        <Link href="/teams">
          <p className="text-blue-400 hover:text-blue-300 mb-6 cursor-pointer">← Back to Teams</p>
        </Link>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white shadow-lg">
          <h2 className="text-4xl font-bold mb-4">{team.name}</h2>
          <p className="text-lg text-blue-100">Captain: <span className="font-semibold">{team.captain}</span></p>
        </div>
      </div>
    </div>
  );
}
