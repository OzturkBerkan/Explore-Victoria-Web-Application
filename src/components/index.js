import Navbar from './common/Navbar'
import Footer from './common/Footer'
import Home from './Home/Home'
import Profile from "./Profile/Profile"
import Explore from "./Explore/Explore"
import VictoriaResources from "./VictoriaResources/VictoriaResources"
import SavedEvents from "./SavedEvents/SavedEvents"
import Request from "./Request/Request"
import Events from "./Explore/Pages/Events"
import Sports from "./Explore/Pages/Sports"
import SchoolClubs from "./Explore/Pages/SchoolClubs"
import Jobs from "./Explore/Pages/Jobs"
import LearningOpportunities from "./Explore/Pages/LearningOps"
import Restaurants from "./Explore/Pages/Restaurants"
import {
  Route,
  Routes
} from "react-router-dom"
import EditProfile from './Profile/EditProfile/EditProfile'
import SearchResults from './Explore/SearchResults'
import Recommendations from './Explore/Recommendations'

export const ExploreVicWebsite = () => {

  return <>
    <div className='masterContainer'>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/victoria-resources" element={<VictoriaResources />} />
          <Route path="/saved-events" element={<SavedEvents />} />
          <Route path="/request" element={<Request />} />
          <Route path="/Profile/EditProfile" element={<EditProfile />} />
          <Route path="/explore/events" element={<Events />} />
          <Route path="/explore/sports" element={<Sports />} />
          <Route path="/explore/restaurants" element={<Restaurants />} />
          <Route path="/explore/school-clubs" element={<SchoolClubs />} />
          <Route path="/explore/learning-opportunities" element={<LearningOpportunities />} />
          <Route path="/explore/jobs" element={<Jobs />} />
          <Route path="/explore/search-results" element={<SearchResults />} />
          <Route path="/explore/recommendations" element={<Recommendations />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </>
}