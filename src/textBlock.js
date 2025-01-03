import React, { useState } from "react";
import axios from "axios";
import "./textBlock.css";

function TextBlock() {
  const [chapter, setChapter] = useState("");
  const [slok, setSlok] = useState("");
  const [shlokData, setShlokData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!chapter || !slok) {
      setError("Both Chapter and Slok numbers are required.");
      return;
    }

    setLoading(true);
    setError(""); // Reset error before search

    try {
      const response = await axios.get(
        `https://vedicscriptures.github.io/slok/${chapter}/${slok}`
      );

      if (response.data && response.data.slok) {
        setShlokData(response.data); // Update state with the response data
      } else {
        setError("No data found for the given chapter and slok.");
      }
    } catch (err) {
      setError("Error fetching data. Please try again.");
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePlay = () => {
    if (!shlokData) return;

    // Create speech synthesis instance
    const utterance = new SpeechSynthesisUtterance(shlokData.slok);

    // Get all voices and select a male voice (simulating a Pandit tone)
    const voices = speechSynthesis.getVoices();
    const maleVoice = voices.find((voice) =>
      voice.name.toLowerCase().includes("male") || voice.lang === "hi-IN"
    );

    // Set the selected voice
    utterance.voice = maleVoice || voices[0]; // Fallback to first available voice if no match

    // Set language and rate for a more authentic feel
    utterance.lang = "hi-IN"; // Hindi or Sanskrit (support for Sanskrit might vary based on voice)
    utterance.rate = 0.9; // Slightly slower for clarity
    utterance.pitch = 1.2; // Slightly higher pitch for a Pandit-like tone

    // Play the utterance
    speechSynthesis.speak(utterance);
  };

  return (
    <div id="textblock">
      <div id="textblock-container">
        <h1 id="textblock-title">Search Bhagavad Gita Shlok</h1>

        {/* Search Form for Chapter and Slok */}
        <form onSubmit={handleSearch} className="search-form">
          <div className="input-group">
            <input
              type="number"
              placeholder="Chapter Number (1-18)"
              value={chapter}
              onChange={(e) => setChapter(e.target.value)}
              className="search-input"
              min="1"
              max="18"
            />
            <input
              type="number"
              placeholder="Slok Number"
              value={slok}
              onChange={(e) => setSlok(e.target.value)}
              className="search-input"
              min="1"
            />
          </div>
          <button type="submit" className="search-button" disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Display Search Results */}
        {shlokData && (
          <div id="search-results">
            <div className="shlok-card">
              <h2 className="shlok-header">
                {`Chapter ${shlokData.chapter}, Verse ${shlokData.verse}`}
              </h2>

              {/* Display the Shlok (Sanskrit) */}
              <p className="shlok-text">{shlokData.slok}</p>

              {/* Play Button */}
              <button className="play-button" onClick={handlePlay}>
                Play Shlok
              </button>
            </div>
          </div>
        )}
      </div>

      <footer id="textblock-footer">
        Project Created With 🧡 for&nbsp;
        <a id="textblock-devsense" href="https://youtube.com/c/DevSense19">
          Krishna
        </a>
      </footer>
    </div>
  );
}

export default TextBlock;
