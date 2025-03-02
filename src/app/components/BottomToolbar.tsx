import React from "react";
import { SessionStatus } from "@/app/types";

interface BottomToolbarProps {
  sessionStatus: SessionStatus;
  onToggleConnection: () => void;
  isPTTActive: boolean;
  setIsPTTActive: (val: boolean) => void;
  isPTTUserSpeaking: boolean;
  handleTalkButtonDown: () => void;
  handleTalkButtonUp: () => void;
  isEventsPaneExpanded: boolean;
  setIsEventsPaneExpanded: (val: boolean) => void;
  isAudioPlaybackEnabled: boolean;
  setIsAudioPlaybackEnabled: (val: boolean) => void;
}

function BottomToolbar({
  sessionStatus,
  onToggleConnection,
  isPTTActive,
  setIsPTTActive,
  isPTTUserSpeaking,
  handleTalkButtonDown,
  handleTalkButtonUp,
  isEventsPaneExpanded,
  setIsEventsPaneExpanded,
  isAudioPlaybackEnabled,
  setIsAudioPlaybackEnabled,
}: BottomToolbarProps) {
  const isConnected = sessionStatus === "CONNECTED";
  const isConnecting = sessionStatus === "CONNECTING";

  function getConnectionButtonLabel() {
    if (isConnected) return "Disconnect";
    if (isConnecting) return "Connecting...";
    return "Connect";
  }

  function getConnectionButtonClasses() {
    const baseClasses =
      "text-white text-base p-2 flex items-center justify-center transition-all duration-300";
    const cursorClass = isConnecting ? "cursor-not-allowed" : "cursor-pointer";
    const responsiveClasses = "w-36 h-12 rounded-full sm:w-24 sm:h-14 sm:rounded-full";

    if (isConnected) {
      return `bg-red-600 hover:bg-red-700 ${cursorClass} ${baseClasses} ${responsiveClasses}`;
    }
    return `bg-black hover:bg-gray-900 ${cursorClass} ${baseClasses} ${responsiveClasses}`;
  }

  return (
    <div className="
        fixed bottom-0 left-0 w-full p-4 
        flex flex-col items-center justify-center
        transform origin-bottom scale-50 md:scale-75
        overflow-x-auto gap-y-2
      "
    >
      {/* Top Row: Connect Button & Push to Talk */}
      <div className="flex flex-row items-center justify-center gap-4">
        <button
          onClick={onToggleConnection}
          className={getConnectionButtonClasses()}
          disabled={isConnecting}
        >
          <span className="text-sm sm:text-xs">{getConnectionButtonLabel()}</span>
        </button>

        <div className="flex flex-row items-center gap-2">
          <input
            id="push-to-talk"
            type="checkbox"
            checked={isPTTActive}
            onChange={(e) => setIsPTTActive(e.target.checked)}
            disabled={!isConnected}
            className="w-4 h-4"
          />
          <label htmlFor="push-to-talk" className="cursor-pointer">
            Push to talk
          </label>
          <button
            onMouseDown={handleTalkButtonDown}
            onMouseUp={handleTalkButtonUp}
            onTouchStart={handleTalkButtonDown}
            onTouchEnd={handleTalkButtonUp}
            disabled={!isPTTActive}
            className={`py-1 px-4 rounded-full ${
              isPTTUserSpeaking ? "bg-gray-300" : "bg-gray-200"
            } ${
              !isPTTActive
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            Talk
          </button>
        </div>
      </div>

      {/* Second Row: Audio Playback & Logs */}
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="flex flex-row items-center gap-2">
          <input
            id="audio-playback"
            type="checkbox"
            checked={isAudioPlaybackEnabled}
            onChange={(e) => setIsAudioPlaybackEnabled(e.target.checked)}
            disabled={!isConnected}
            className="w-4 h-4"
          />
          <label htmlFor="audio-playback" className="cursor-pointer">
            Audio playback
          </label>
        </div>

        <div className="flex flex-row items-center gap-2">
          <input
            id="logs"
            type="checkbox"
            checked={isEventsPaneExpanded}
            onChange={(e) => setIsEventsPaneExpanded(e.target.checked)}
            className="w-4 h-4"
          />
          <label htmlFor="logs" className="cursor-pointer">
            Logs
          </label>
        </div>
=======
        flex flex-row flex-nowrap items-center justify-center
        transform origin-bottom scale-50 md:scale-75
        overflow-x-auto
      "
    >
      <button
        onClick={onToggleConnection}
        className={getConnectionButtonClasses()}
        disabled={isConnecting}
      >
        <span className="text-sm sm:text-xs">{getConnectionButtonLabel()}</span>
      </button>

      <div className="flex flex-row items-center gap-2 ml-4">
        <input
          id="push-to-talk"
          type="checkbox"
          checked={isPTTActive}
          onChange={(e) => setIsPTTActive(e.target.checked)}
          disabled={!isConnected}
          className="w-4 h-4"
        />
        <label htmlFor="push-to-talk" className="cursor-pointer">
          Push to talk
        </label>
        <button
          onMouseDown={handleTalkButtonDown}
          onMouseUp={handleTalkButtonUp}
          onTouchStart={handleTalkButtonDown}
          onTouchEnd={handleTalkButtonUp}
          disabled={!isPTTActive}
          className={`py-1 px-4 rounded-full ${
            isPTTUserSpeaking ? "bg-gray-300" : "bg-gray-200"
          } ${
            !isPTTActive
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          Talk
        </button>
      </div>

      <div className="flex flex-row items-center gap-2 ml-4">
        <input
          id="audio-playback"
          type="checkbox"
          checked={isAudioPlaybackEnabled}
          onChange={(e) => setIsAudioPlaybackEnabled(e.target.checked)}
          disabled={!isConnected}
          className="w-4 h-4"
        />
        <label htmlFor="audio-playback" className="cursor-pointer">
          Audio playback
        </label>
      </div>

      <div className="flex flex-row items-center gap-2 ml-4">
        <input
          id="logs"
          type="checkbox"
          checked={isEventsPaneExpanded}
          onChange={(e) => setIsEventsPaneExpanded(e.target.checked)}
          className="w-4 h-4"
        />
        <label htmlFor="logs" className="cursor-pointer">
          Logs
        </label>
>>>>>>> 4f88101 (Add files via upload)
      </div>
    </div>
  );
}

export default BottomToolbar;
