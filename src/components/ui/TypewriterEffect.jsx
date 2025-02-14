import React, { useState, useEffect } from "react";

const TypewriterEffect = ({ text, speed = 150, loop = true }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (index < text.length && !isDeleting) {
      // Escribiendo
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index > 0) {
      // Borrando
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, speed / 2);
      return () => clearTimeout(timeout);
    } else if (index === text.length && !isDeleting) {
      // Espera y comienza a borrar
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (index === 0 && isDeleting) {
      // Reinicia el bucle
      setIsDeleting(false);
    }
  }, [index, text, speed, isDeleting]);

  return <span>{displayedText}</span>;
};

export default TypewriterEffect;
