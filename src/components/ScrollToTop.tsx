import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpToLine } from "lucide-react";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showTopBtn && (
        <Button
          onClick={goToTop}
          className="fixed bottom-4 right-4 opacity-90 shadow-md transition transform duration-300 ease-in-out hover:scale-125"
          size="icon"
        >
          <ArrowUpToLine className="h-4 w-4" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop