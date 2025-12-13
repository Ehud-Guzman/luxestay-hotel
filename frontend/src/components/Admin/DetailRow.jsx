export default function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-600/20 last:border-b-0">
      <span className="text-gray-400 font-medium text-sm">{label}</span>
      <span className="text-white font-semibold text-right">{value}</span>
    </div>
  );
}