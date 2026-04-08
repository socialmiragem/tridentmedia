import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapJS from './BootstrapJS';
import "@/app/styles/globals.css";
import "@/app/styles/responsive.css";

import Navbar from './frontend/components/Navigation';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from './frontend/components/Footer';
import SmoothScroll from './frontend/components/SmoothScroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body>
        <BootstrapJS/>
        {/* <SmoothScroll> */}
        <Navbar />
        {children}
        <Footer/>
        {/* </SmoothScroll> */}
      </body>
    </html>
  );
}
