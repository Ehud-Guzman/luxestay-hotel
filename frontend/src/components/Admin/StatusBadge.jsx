export default function StatusBadge({ status }) {
  const styles = {
    pending: "bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-400 border-amber-500/40",
    approved: "bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 text-emerald-400 border-emerald-500/40",
    rejected: "bg-gradient-to-r from-rose-500/20 to-rose-600/20 text-rose-400 border-rose-500/40"
  };

  return (
    <span className={`px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-sm ${styles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}