"use client";
import React, { useState } from "react";
import { Play } from "lucide-react";

const KapookleDictionary = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playPronunciation = () => {
    setIsPlaying(true);
    const utterance = new SpeechSynthesisUtterance();
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.text =
      '<speak><prosody rate="medium" pitch="medium">kah poo kul</prosody></speak>';
    utterance.onend = () => setIsPlaying(false);

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    } else {
      console.error("Speech synthesis not supported");
      setIsPlaying(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl p-6 font-serif">
      <h1 className="mb-2 text-4xl font-bold">kapookle</h1>
      <span className="mb-4 block text-xl text-gray-600">
        noun, verb, noun (pejorative)
      </span>

      <div className="mb-4 flex items-center">
        <span className="mr-4 text-lg">ka·poo·kle</span>
        <button
          className={`flex items-center rounded-full bg-gray-200 px-3 py-1 text-sm ${isPlaying ? "cursor-not-allowed opacity-50" : "hover:bg-gray-300"}`}
          onClick={playPronunciation}
          disabled={isPlaying}
        >
          <Play size={16} className="mr-1" />
          /kah-poo-kul/
        </button>
      </div>

      <ol className="list-inside list-decimal space-y-4">
        <li>
          <span className="font-bold">: </span>
          <span className="italic">(noun) </span>A rarefied social phenomenon
          wherein an individual&apos;s exceptional grace and refinement create
          an atmosphere of such sublime elegance that others find themselves at
          a loss, unsure how to comport themselves in the presence of such
          divine sophistication.
          <p className="ml-6 mt-2 text-gray-700">
            The moment she entered the soirée, her ethereal poise induced a
            collective <em>kapookle</em>, leaving even the most seasoned
            socialites fumbling for appropriate words and gestures.
          </p>
        </li>
        <li>
          <span className="font-bold">: </span>
          <span className="italic">(verb) </span>
          To perform a task with such extraordinary intelligence and finesse
          that it appears effortless, often leaving observers in a state of awe.
          <p className="ml-6 mt-2 text-gray-700">
            The young prodigy managed to <em>kapookle</em> the complex theorem,
            solving it with an elegance that astounded even the most seasoned
            mathematicians.
          </p>
        </li>
        <li>
          <span className="font-bold">: </span>
          <span className="italic">(noun, pejorative) </span>A person who,
          despite pretensions to refinement or intelligence, displays a profound
          lack of grace or wit, often to comedic effect.
          <p className="ml-6 mt-2 text-gray-700">
            Despite his expensive education, he proved himself a complete{" "}
            <em>kapookle</em> when he mistook the sommelier for the maître
            d&apos; and proceeded to order pizza.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default KapookleDictionary;
