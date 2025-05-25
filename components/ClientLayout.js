import Navigation from "./Navigation";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
