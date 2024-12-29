import React from 'react';
import { Trophy } from 'lucide-react';

interface FlagPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FlagPopup({ isOpen, onClose }: FlagPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 to-red-800 rounded-t-lg" />
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
            <Trophy className="h-8 w-8 text-red-800" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Congratulations!</h2>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="font-mono text-lg text-gray-800 break-all">
              CTF{'{'}Investment_Guru_Harshad_Mehta_XYZStock_Tip{'}'}
            </p>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            You've successfully discovered the hidden investment strategy!
          </p>
          <button
            onClick={onClose}
            className="bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}