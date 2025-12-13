import { motion } from "framer-motion";
import DetailCard from "./DetailCard";
import DetailRow from "./DetailRow";

export default function AppointmentModal({ appointment, onClose, onStatusUpdate }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 bg-gradient-to-br from-indigo-900/60 to-blue-900/60 backdrop-blur-2xl flex items-center justify-center z-50 p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 30, rotateX: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 30, rotateX: 10 }}
        transition={{ duration: 0.5, ease: "easeOut", type: "spring", stiffness: 100 }}
        className="bg-gradient-to-br from-indigo-950/90 to-blue-950/90 border border-indigo-500/20 rounded-3xl p-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-indigo-500/20 backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader appointment={appointment} onClose={onClose} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <DetailCard label="Client Information" icon="👤">
            <DetailRow label="Full Name" value={appointment.name} />
            <DetailRow label="Email" value={appointment.email} />
            <DetailRow label="Phone" value={appointment.phone} />
          </DetailCard>
          
          <DetailCard label="Appointment Details" icon="📅">
            <DetailRow label="Service" value={appointment.service} />
            <DetailRow label="Room ID" value={appointment.roomId || "Not specified"} />
            <DetailRow label="Date" value={new Date(appointment.date).toLocaleDateString()} />
            <DetailRow label="Time" value={appointment.time} />
          </DetailCard>
        </div>

        <AdditionalInfo appointment={appointment} />
        <ActionButtons appointment={appointment} onStatusUpdate={onStatusUpdate} onClose={onClose} />
      </motion.div>
    </motion.div>
  );
}

const ModalHeader = ({ appointment, onClose }) => (
  <div className="flex justify-between items-center mb-10">
    <div>
      <h3 className="text-3xl font-bold text-white tracking-tight">Appointment Details</h3>
      <p className="text-indigo-200/80 text-sm font-medium">ID: #{appointment.id}</p>
    </div>
    <motion.button 
      whileHover={{ scale: 1.1, rotate: 90 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClose}
      className="w-12 h-12 bg-indigo-700/30 hover:bg-indigo-600/40 rounded-full flex items-center justify-center text-indigo-200 hover:text-white transition-all duration-300 border border-indigo-500/30"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </motion.button>
  </div>
);

const AdditionalInfo = ({ appointment }) => (
  (appointment.notes || appointment.guestCount || appointment.specialRequests) && (
    <DetailCard label="Additional Information" icon="📝">
      {appointment.notes && <DetailRow label="Notes" value={appointment.notes} />}
      {appointment.guestCount && <DetailRow label="Guest Count" value={appointment.guestCount} />}
      {appointment.specialRequests && <DetailRow label="Special Requests" value={appointment.specialRequests} />}
    </DetailCard>
  )
);

const ActionButtons = ({ appointment, onStatusUpdate, onClose }) => (
  <div className="flex space-x-6 mt-10 pt-8 border-t border-indigo-500/20">
    {appointment.status !== "approved" && (
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          onStatusUpdate(appointment.id, "approved");
          onClose();
        }}
        className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-4 rounded-xl font-semibold tracking-tight transition-all duration-300 shadow-lg shadow-emerald-500/30"
      >
        Approve Appointment
      </motion.button>
    )}
    {appointment.status !== "rejected" && (
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(244, 63, 94, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          onStatusUpdate(appointment.id, "rejected");
          onClose();
        }}
        className="flex-1 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white py-4 rounded-xl font-semibold tracking-tight transition-all duration-300 shadow-lg shadow-rose-500/30"
      >
        Reject Appointment
      </motion.button>
    )}
  </div>
);