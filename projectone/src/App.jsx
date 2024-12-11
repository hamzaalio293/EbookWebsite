import 'font-awesome/scss/font-awesome.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css';
import { faHouse, faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons';
import Navigation from './Components/EbookWeb/Navigation';
import HeroSection from './Components/EbookWeb/HeroSection';
import Icons from './Components/EbookWeb/Icons';
import Details from './Components/EbookWeb/Details';
import Download from './Components/EbookWeb/Download';
import Social from './Components/EbookWeb/Social';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/scss/bootstrap.scss';
import '../src/scss/styles.scss';

const App = () => {
  return (
    <>
      <Navigation />
      <br /><br /><br />
      <HeroSection />

      {/* Icons Section with 3 instances vertically */}
      <section className="icons bg-light py-5">
        <div className="container-xl">
          <div className="row justify-content-center">
            {/* Each Icon Component */}
            <div className="col-md-4 text-center mb-4">
              <Icons icon={faUser} title="Unlock Your Blogging Potential" description={"here is new descrption 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. here is new descrption 3 Lorem ipsum dolor sit amet consectetur adipisicing elit "} />
            </div>
            <div className="col-md-4 text-center mb-4">
              <Icons icon={faThumbsUp} title="Grow Your Influence" description={"here is new descrption 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. here is new descrption 3 Lorem ipsum dolor sit amet consectetur adipisicing elit "} />
            </div>
            <div className="col-md-4 text-center mb-4">
              <Icons icon={faHouse} title="Build Your Community" description={"here is new descrption 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. here is new descrption 3 Lorem ipsum dolor sit amet consectetur adipisicing elit "}/>
            </div>
          </div>
        </div>
      </section>

      <Details />
      {/* <Footer /> */}
      <Download />
      <Social />
    </>
  );
};

export default App;
