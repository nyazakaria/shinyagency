import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Freelances from './pages/Freelances'
import Results from './pages/Results'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider, SurveyProvider } from './utils/context/Context'
import Footer from './components/Footer'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/freelances" element={<Freelances />}></Route>
            <Route path="/results" element={<Results />}></Route>
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
