import { motion } from "framer-motion";

export default function StatCard({ title, value, icon, gradient, trend }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={`bg-gradient-to-br ${gradient} backdrop-blur-lg border border-gray-700/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        <span className={`text-sm font-medium px-2 py-1 rounded-full ${
          trend.includes('+') ? 'bg-emerald-500/20 text-emerald-400' : 
          trend.includes('awaiting') ? 'bg-amber-500/20 text-amber-400' :
          'bg-blue-500/20 text-blue-400'
        }`}>
          {trend}
        </span>
      </div>
      <div>
        <p className="text-3xl font-bold text-white mb-1">{value}</p>
        <p className="text-gray-400 text-sm">{title}</p>
      </div>
    </motion.div>
  );
}