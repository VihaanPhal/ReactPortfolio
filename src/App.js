import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Sections/Hero";
import { darkTheme } from "./utils/Themes";
import Skills from "./Components/Sections/Skills";
import Footer from "./Components/Sections/Footer";
import Projects from "./Components/Sections/Projects";
import Education from "./Components/Sections/Education";
import Experience from "./Components/Sections/Experience";
import StartCanvas from "./Components/canvas/Stars";
import Contact from "./Components/Sections/Contact";
import Resume from "./Components/Resume";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const location = useLocation();
  const isResumePage = location.pathname === "/resume";

  return (
    <ThemeProvider theme={darkTheme}>
      {!isResumePage && <Navbar />}
      {!isResumePage && (
        <Body>
          <StartCanvas />
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Wrapper>
                      <Skills />
                      <Experience />
                    </Wrapper>
                    <Projects />
                    <Wrapper>
                      <Education />
                      <Contact />
                    </Wrapper>
                    <Footer />
                  </>
                }
              />
            </Routes>
          </div>
        </Body>
      )}
      {isResumePage && (
        <Routes>
          <Route path="/resume" element={<Resume />} />
        </Routes>
      )}
    </ThemeProvider>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
