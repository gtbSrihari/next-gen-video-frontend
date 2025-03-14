import { ProtectedRoute } from '../components/ProtectedRoute';

export default function Chat() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-black text-3xl font-bold mb-4 text-center">Chat</h1>
        <div className="bg-white p-4 rounded-lg shadow-md max-w-2xl mx-auto">
          <div className="h-96 overflow-y-auto mb-4 p-2 border rounded">
            <p className="text-gray-600">User 1: Hello!</p>
            <p className="text-gray-600">User 2: Hi there!</p>
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full border p-2 rounded focus:outline-none text-black"
            />
            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Send
            </button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}