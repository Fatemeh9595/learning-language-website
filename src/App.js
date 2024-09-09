import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OurBooks from './components/ourBooks/OurBooks';
import MyFoot from './components/myFoot/MyFoot';
import Book from './components/book/Book';
import Home from './components/home/Home';
import EnglishGrammer from './components/englishGrammer/EnglishGrammer';
import EnglishVocabulary from './components/englishVocabulary/EnglishVocabulary';
import FrenchGrammer from "./components/frenchGrammer/FrenchGrammer"
import FrenchVocabulary from "./components/frenchVocabulary/FrenchVocabulary"
import GermanVocabulary from "./components/germanVocabulary/germanVocabulary"
import GermanGrammer from "./components/germanGrammer/GermanGrammer"


function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/our-books' element={<OurBooks/>} />
         <Route path='/english-grammer' element={<EnglishGrammer/>} />
         <Route path='/english-vocabulary' element={<EnglishVocabulary/>} />
         <Route path='/french-grammer' element={<FrenchGrammer/>} />
         <Route path='/french-vocabulary' element={<FrenchVocabulary/>} />
         <Route path='/german-grammer' element={<GermanGrammer/>} />
         <Route path='/german-vocabulary' element={<GermanVocabulary/>} />
         <Route path='/book/:bookId' element={<Book/>} />
         <Route path='/contact-with-us' element={<MyFoot/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
