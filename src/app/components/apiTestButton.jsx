'use client';

export default function ApiTestButton({ onClick, label }) {
  return (
    <button onClick={onClick} className="text-white bg-gray-800 px-4 py-2 rounded">
      {label}
    </button>
  );
}