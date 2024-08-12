import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import './App.sass'
import HomePage from "./pages/HomePage/HomePage.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CoursesPage from './pages/CoursesPage/CoursesPage.jsx'
import OpenCoursePage from "./pages/CoursesPage/openCoursePage/openCoursePage.jsx";
function App() {

  return (
    <>
        <Router>
            <Header/>
            {/*<Routes>*/}
            {/*    <Route exact path="/" element={<HomePage />} />*/}
            {/*    <Route path="/courses" element={<CoursesPage/>} />*/}
            {/*</Routes>*/}
            <OpenCoursePage
                code={`D_uLM5i0Z4c`}
                likes={12}
                date={`20.09.2024`}
                title={`UI/UX Design Course`}
                isLiked={false}
                desc={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolore magni rerum! Ab ad adipisci alias aliquam at aut commodi cum dolor dolorem doloribus earum eius eligendi est exercitationem expedita facere hic, iste maiores maxime nam necessitatibus nemo nisi nobis perspiciatis quaerat quas quasi quibusdam quidem repellendus sapiente sequi similique sint sit sunt tempora voluptatem voluptates. Amet assumenda at aut consequuntur, ipsa perspiciatis praesentium quibusdam rerum. Cupiditate doloribus, vel! At delectus ea illo iure maxime nemo sequi totam! Adipisci atque dolor, ea, explicabo id ipsam libero minus non perspiciatis sequi veritatis vitae? Ab autem distinctio laboriosam necessitatibus porro quisquam sit!`}
                avatar={`https://live.staticflickr.com/8673/16247421886_822fbdbc3a_z.jpg`}
                views={343243424}
            />
            <Footer/>
        </Router>
    </>
  )
}

export default App
