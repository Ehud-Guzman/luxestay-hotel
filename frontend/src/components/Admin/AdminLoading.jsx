export default function AdminLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-500/20 rounded-full animate-spin mx-auto mb-6"></div>
          <div className="w-20 h-20 border-4 border-transparent border-t-blue-500 rounded-full animate-spin mx-auto absolute top-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <p className="text-gray-400 text-lg">Loading dashboard...</p>
        <p className="text-gray-600 text-sm mt-2">Preparing your admin interface</p>
      </div>
    </div>
  );
}