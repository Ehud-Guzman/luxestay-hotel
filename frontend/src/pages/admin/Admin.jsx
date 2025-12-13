import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import AdminLoading from "../../components/Admin/AdminLoading";
import AdminError from "../../components/Admin/AdminError";
import StatCard from "../../components/Admin/StatCard";
import StatusBadge from "../../components/Admin/StatusBadge";
import AppointmentModal from "../../components/Admin/AppointmentModal";

// Simulate a role check; in real apps, get this from auth context or JWT
const currentRole = "admin";

export default function Admin() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0
  });

  // Redirect or deny access if not admin
  if (currentRole !== "admin") {
    return <AccessDenied />;
  }

  const fetchAppointments = async (query = "") => {
    try {
      setLoading(true);
      const res = await axios.get(`https://luxestay-hotel.onrender.com/api/appointments${query ? `?q=${query}` : ""}`);
      setAppointments(res.data);
      updateStats(res.data);
    } catch (err) {
      setError("Failed to fetch appointments");
      console.error("Fetch appointments error:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateStats = (data) => {
    setStats({
      total: data.length,
      pending: data.filter(a => a.status === "pending").length,
      approved: data.filter(a => a.status === "approved").length,
      rejected: data.filter(a => a.status === "rejected").length
    });
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`https://luxestay-hotel.onrender.com/api/appointments/${id}/status`, { status });
      setAppointments(prev => prev.map(a => (a.id === id ? { ...a, status } : a)));
      updateStats(appointments.map(a => a.id === id ? { ...a, status } : a));
    } catch (error) {
      console.error("Update status error:", error);
      alert("Failed to update status");
    }
  };

  const deleteAppointment = async (id) => {
    if (!window.confirm("Are you sure you want to delete this appointment?")) return;
    
    try {
      await axios.delete(`https://luxestay-hotel.onrender.com/api/appointments/${id}`);
      setAppointments(prev => prev.filter(a => a.id !== id));
      updateStats(appointments.filter(a => a.id !== id));
    } catch (error) {
      console.error("Delete appointment error:", error);
      alert("Failed to delete appointment");
    }
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    fetchAppointments(value);
  };

  const filteredAppointments = appointments.filter(appointment => {
    if (activeTab === "all") return true;
    return appointment.status === activeTab;
  });

  if (loading) return <AdminLoading />;
  if (error) return <AdminError error={error} onRetry={fetchAppointments} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20 pb-10 px-4 relative overflow-hidden">
      <BackgroundElements />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <Header 
          filter={filter}
          onFilterChange={handleFilterChange}
          stats={stats}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        
        <AppointmentsTable
          appointments={filteredAppointments}
          onStatusUpdate={updateStatus}
          onViewAppointment={setSelectedAppointment}
          onDeleteAppointment={deleteAppointment}
        />
      </div>

      <AnimatePresence>
        {selectedAppointment && (
          <AppointmentModal 
            appointment={selectedAppointment} 
            onClose={() => setSelectedAppointment(null)} 
            onStatusUpdate={updateStatus}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Sub-components for Admin.js
const AccessDenied = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-center p-8 max-w-md w-full"
    >
      <div className="w-32 h-32 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <div className="relative">
          <div className="w-20 h-20 bg-red-500/20 rounded-full animate-ping absolute inset-0"></div>
          <svg className="w-16 h-16 text-red-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
      </div>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-3">Access Denied</h2>
      <p className="text-gray-400 mb-6">Administrator privileges required to access this dashboard</p>
      <button 
        onClick={() => window.history.back()}
        className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-600/50"
      >
        Return to Safety
      </button>
    </motion.div>
  </div>
);

const BackgroundElements = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />
  </div>
);

const Header = ({ filter, onFilterChange, stats, activeTab, onTabChange }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="mb-8"
  >
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
      <div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3">Admin Dashboard</h1>
        <p className="text-gray-400 text-lg">Manage appointments and reservations with precision</p>
      </div>
      <SearchFilter filter={filter} onFilterChange={onFilterChange} />
    </div>

    <StatsGrid stats={stats} />
    <FilterTabs activeTab={activeTab} onTabChange={onTabChange} stats={stats} />
  </motion.div>
);

const SearchFilter = ({ filter, onFilterChange }) => (
  <div className="relative mt-4 lg:mt-0">
    <div className="relative">
      <input
        type="text"
        placeholder="Search appointments..."
        className="pl-12 pr-6 py-3.5 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 w-80 backdrop-blur-sm"
        value={filter}
        onChange={onFilterChange}
      />
      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  </div>
);

const StatsGrid = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <StatCard 
      title="Total Appointments" 
      value={stats.total} 
      icon="📊"
      gradient="from-blue-500/10 to-blue-600/10"
      trend="+12%"
    />
    <StatCard 
      title="Pending" 
      value={stats.pending} 
      icon="⏳"
      gradient="from-amber-500/10 to-amber-600/10"
      trend={stats.pending > 0 ? `${stats.pending} awaiting` : "All clear"}
    />
    <StatCard 
      title="Approved" 
      value={stats.approved} 
      icon="✅"
      gradient="from-emerald-500/10 to-emerald-600/10"
      trend="+8%"
    />
    <StatCard 
      title="Rejected" 
      value={stats.rejected} 
      icon="❌"
      gradient="from-rose-500/10 to-rose-600/10"
      trend={stats.rejected > 0 ? "Needs review" : "No issues"}
    />
  </div>
);

const FilterTabs = ({ activeTab, onTabChange, stats }) => (
  <div className="flex space-x-1 p-1 bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 w-fit mb-8">
    {["all", "pending", "approved", "rejected"].map((tab) => (
      <button
        key={tab}
        onClick={() => onTabChange(tab)}
        className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
          activeTab === tab
            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
            : "text-gray-400 hover:text-white hover:bg-gray-700/50"
        }`}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)} {tab !== "all" && `(${stats[tab]})`}
      </button>
    ))}
  </div>
);

const AppointmentsTable = ({ appointments, onStatusUpdate, onViewAppointment, onDeleteAppointment }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl shadow-black/20"
  >
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-700/50">
            <th className="text-left p-6 text-gray-400 font-medium text-xs uppercase tracking-widest">Client</th>
            <th className="text-left p-6 text-gray-400 font-medium text-xs uppercase tracking-widest">Service</th>
            <th className="text-left p-6 text-gray-400 font-medium text-xs uppercase tracking-widest">Date & Time</th>
            <th className="text-left p-6 text-gray-400 font-medium text-xs uppercase tracking-widest">Status</th>
            <th className="text-left p-6 text-gray-400 font-medium text-xs uppercase tracking-widest">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <AppointmentRow
              key={appointment.id}
              appointment={appointment}
              index={index}
              onStatusUpdate={onStatusUpdate}
              onView={onViewAppointment}
              onDelete={onDeleteAppointment}
            />
          ))}
        </tbody>
      </table>
    </div>

    {appointments.length === 0 && <EmptyState />}
  </motion.div>
);

const AppointmentRow = ({ appointment, index, onStatusUpdate, onView, onDelete }) => (
  <motion.tr
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.05 }}
    className="border-b border-gray-700/30 hover:bg-gray-700/20 transition-all duration-300 group"
  >
    <td className="p-6">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          {appointment.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <p className="font-semibold text-white group-hover:text-blue-300 transition-colors">{appointment.name}</p>
          <p className="text-sm text-gray-400">{appointment.email}</p>
        </div>
      </div>
    </td>
    <td className="p-6">
      <p className="text-white font-medium">{appointment.service}</p>
      {appointment.roomId && (
        <p className="text-sm text-gray-400">Room: {appointment.roomId}</p>
      )}
    </td>
    <td className="p-6">
      <p className="text-white">
        {new Date(appointment.date).toLocaleDateString('en-US', { 
          weekday: 'short', 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        })}
      </p>
      <p className="text-sm text-gray-400">{appointment.time}</p>
    </td>
    <td className="p-6">
      <StatusBadge status={appointment.status} />
    </td>
    <td className="p-6">
      <ActionButtons 
        appointment={appointment}
        onStatusUpdate={onStatusUpdate}
        onView={onView}
        onDelete={onDelete}
      />
    </td>
  </motion.tr>
);

const ActionButtons = ({ appointment, onStatusUpdate, onView, onDelete }) => (
  <div className="flex space-x-2">
    {appointment.status !== "approved" && (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onStatusUpdate(appointment.id, "approved")}
        className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl text-sm font-medium shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
      >
        Approve
      </motion.button>
    )}
    {appointment.status !== "rejected" && (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onStatusUpdate(appointment.id, "rejected")}
        className="px-4 py-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-xl text-sm font-medium shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all duration-300"
      >
        Reject
      </motion.button>
    )}
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onView(appointment)}
      className="px-4 py-2 bg-gray-700/50 text-gray-200 rounded-xl text-sm font-medium border border-gray-600/50 hover:bg-gray-600/50 hover:border-gray-500/50 transition-all duration-300"
    >
      View
    </motion.button>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onDelete(appointment.id)}
      className="px-4 py-2 bg-gray-700/50 text-rose-400 rounded-xl text-sm font-medium border border-rose-500/30 hover:bg-rose-500/10 hover:border-rose-500/50 transition-all duration-300"
    >
      Delete
    </motion.button>
  </div>
);

const EmptyState = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-center py-16"
  >
    <div className="w-24 h-24 bg-gray-700/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-600/30">
      <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    </div>
    <p className="text-gray-500 text-lg">No appointments found</p>
    <p className="text-gray-600 text-sm mt-2">Try changing your filters or search terms</p>
  </motion.div>
);