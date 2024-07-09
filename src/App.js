import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HOMEPAGE from "./pages/HOMEPAGE";
import CHECKOUTPAGE from "./pages/CHECKOUTPAGE";
import CARTINGPAGE from "./pages/CARTINGPAGE";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/check-out-page":
        title = "";
        metaDescription = "";
        break;
      case "/carting-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HOMEPAGE />} />
      <Route path="/check-out-page" element={<CHECKOUTPAGE />} />
      <Route path="/carting-page" element={<CARTINGPAGE />} />
    </Routes>
  );
}
export default App;
