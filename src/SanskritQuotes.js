import React, { useEffect } from "react";
// import './SanskritQuotes.css';
import './Animation.css'
import './AnimatedQuote'
import AnimatedQuote from "./AnimatedQuote";


function SanskritQuotes() {
    // Example quotes
    const quotes = ['Quote 1', 'Quote 2', 'Quote 3', 'Quote 4'];
  
    return (
      <div>
        {quotes.map((quote, index) => (
          <p key={index} className="text-element">
            {quote}
          </p>
        ))}
      </div>
    );
  }
  
  export default SanskritQuotes;