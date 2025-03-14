import { ProtectedRoute } from './components/ProtectedRoute';

export default function Home() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-4 text-center text-black">Video Feed</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((video) => (
            <div key={video} className="bg-white p-4 rounded-lg shadow-md">
              <div className="bg-gray-300 h-40 rounded mb-2"></div>
              <h2 className="text-black text-lg font-semibold">Video {video}</h2>
              <p className="text-gray-600">A short description of video {video}</p>
            </div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}