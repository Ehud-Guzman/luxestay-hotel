export default function AdminError({ error, onRetry }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="text-center p-8 max-w-md w-full">
        <div className="w-32 h-32 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="relative">
            <div className="w-20 h-20 bg-rose-500/20 rounded-full animate-ping absolute inset-0"></div>
            <svg className="w-16 h-16 text-rose-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent mb-3">Connection Error</h2>
        <p className="text-gray-400 mb-6">{error}</p>
        <div className="flex space-x-4">
          <button 
            onClick={onRetry}
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/25"
          >
            Retry
          </button>
          <button 
            onClick={() => window.location.reload()}
            className="flex-1 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 px-6 py-3 rounded-xl font-medium transition-all duration-300 border border-gray-600/50"
          >
            Reload
          </button>
        </div>
      </div>
    </div>
  );
}