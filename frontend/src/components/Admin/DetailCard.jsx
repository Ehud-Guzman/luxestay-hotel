export default function DetailCard({ label, icon, children }) {
  return (
    <div className="bg-gray-700/20 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-6">
      <div className="flex items-center space-x-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h4 className="text-lg font-semibold text-white">{label}</h4>
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}