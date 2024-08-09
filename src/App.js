import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './components/Home';
import AvailableGames from './pages/AvailableGames';
import Location from './pages/Location';
import Review from './pages/Review';
import Contact from './pages/Contact';
import BookCricket from './pages/BookCricket';
import BookFootball from './pages/BookFootball';
import BookBadminton from './pages/BookBadminton';
import CricketGrounds from './pages/CricketGrounds'; // Import new component
import FootballGrounds from './pages/FootballGrounds'; // Import new component
import BadmintonGrounds from './pages/BadmintonGrounds'; // Import new component
import './pages/GroundDetails';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/available-games" element={<AvailableGames />} />
          <Route path="/location" element={<Location />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-cricket" element={<BookCricket />} />
          <Route path="/book-football" element={<BookFootball />} />
          <Route path="/book-badminton" element={<BookBadminton />} />
          <Route path="/select-cricket-ground" element={<CricketGrounds />} /> {/* New route */}
          <Route path="/select-football-ground" element={<FootballGrounds />} /> {/* New route */}
          <Route path="/select-badminton-ground" element={<BadmintonGrounds />} /> {/* New route */}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer /> {/* Add Footer */}
      </Router>
    </ThemeProvider>
  );
};

export default App;
