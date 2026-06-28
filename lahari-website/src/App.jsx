import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DisclaimerPopup from "./components/DisclaimerPopup";
import AppRoutes from "./routes";

export default function App() {
  return (
    <div className="app">
      <DisclaimerPopup />
      <Navbar />
      <main className="app-main">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}
