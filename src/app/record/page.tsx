'use client';
import { useRef, useState } from 'react';
import { ProtectedRoute } from '../components/ProtectedRoute';

export default function Record() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    setIsRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-black text-3xl font-bold mb-4 text-center">Record a Video</h1>
        <video ref={videoRef} autoPlay muted className="w-full max-w-md mx-auto rounded border-black" />
        <div className="mt-4 flex justify-center space-x-4">
          <button
            onClick={startRecording}
            disabled={isRecording}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            Start Recording
          </button>
          <button
            onClick={stopRecording}
            disabled={!isRecording}
            className="bg-red-500 text-white p-2 rounded hover:bg-red-600 disabled:bg-gray-400"
          >
            Stop Recording
          </button>
        </div>
      </div>
    </ProtectedRoute>
  );
}