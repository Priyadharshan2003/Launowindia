import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LaunowHomePage from "./pages/LaunowHomePage";
import AboutUs from "./pages/Aboutus";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import TermsOfService from "./pages/policies/TermsOfService";
import RefundPolicy from "./pages/policies/RefundPolicy";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState("home"); // "home", "about", "privacy", "terms", "refund"

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return <LaunowHomePage setPage={setPage} />;
      case "about":
        return <AboutUs setPage={setPage} />;
      case "privacy":
        return <PrivacyPolicy setPage={setPage} />;
      case "terms":
        return <TermsOfService setPage={setPage} />;
      case "refund":
        return <RefundPolicy setPage={setPage} />;
      default:
        return <LaunowHomePage setPage={setPage} />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />
      ) : (
        renderPage()
      )}
    </AnimatePresence>
  );
}

export default App;