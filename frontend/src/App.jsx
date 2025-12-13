import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Gallery from "./pages/Gallery";
import Dining from "./pages/Dining";
import Events from "./pages/Events";
import About from "./pages/About";
import BlogPage from "./pages/Blog";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Admin from "./pages/admin/Admin"; // <-- import Admin
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const currentTier = "premium"; // Can be dynamic
  const currentRole = "admin";    // <-- set role here: "user" or "admin"

  return (
    <>
      <Navbar tier={currentTier} role={currentRole} /> {/* pass role */}
      <main className="pt-0">
        <Routes>
          <Route path="/" element={<Home tier={currentTier} />} />
          <Route path="/rooms" element={<Rooms tier={currentTier} />} />
          <Route path="/gallery" element={<Gallery tier={currentTier} />} />
          <Route path="/dining" element={<Dining tier={currentTier} />} />
          <Route path="/events" element={<Events tier={currentTier} />} />
          <Route path="/about" element={<About tier={currentTier} />} />
          <Route path="/blog" element={<BlogPage tier={currentTier} />} />
          <Route path="/contact" element={<Contact tier={currentTier} />} />
          <Route path="/booking" element={<Booking tier={currentTier} />} />
          <Route path="/admin" element={<Admin tier={currentTier} />} /> {/* Admin route */}

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
