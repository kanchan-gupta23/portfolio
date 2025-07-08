import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

import Contact from "./components/PersonalDetails";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import "./App.css";
import Projects from "./components/Projects";

// Styled Container with background image and scrollbar styles
const Container = styled.div`
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100vh; /* Ensure full viewport height */
  width: 100vw; /* Ensure full viewport width */
  overflow-y: auto; /* Enable vertical scrolling */
  background-size: cover;
  background-position: center;
`;

function App() {
  return (
    <Container className="mooli snap-y scroll-smooth   backdrop-blur-md bg-gradient-to-r from-blue-950 via-indigo-950 to-gray-950">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
