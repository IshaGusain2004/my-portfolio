import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior to the HTML element
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      // Clean up the style when the component unmounts
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Home />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
