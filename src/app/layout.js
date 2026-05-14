import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapJS from './BootstrapJS';
import "@/app/styles/globals.css";
import "@/app/styles/responsive.css";

import Navbar from './frontend/components/Navigation';
import Footer from './frontend/components/Footer';
import SmoothScroll from './frontend/components/SmoothScroll';

import '@fortawesome/fontawesome-svg-core/styles.css';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { LoaderProvider } from './context/LoaderContext';
import PageLoader from './frontend/components/PageLoader';

gsap.registerPlugin(ScrollTrigger);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <LoaderProvider>

          <PageLoader />

          <BootstrapJS />

          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>

        </LoaderProvider>

      </body>
    </html>
  );
}