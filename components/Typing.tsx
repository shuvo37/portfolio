"use client";

import { useEffect, useState } from "react";

export default function Typing({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = phrases[index];
    let delay = deleting ? 30 : 65;
    if (!deleting && text === full) delay = 1600;
    else if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === full) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((index + 1) % phrases.length);
      } else {
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases]);

  return (
    <span>
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-accent align-middle">&nbsp;</span>
    </span>
  );
}
