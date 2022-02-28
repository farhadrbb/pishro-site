import React, { lazy, Suspense } from "react";
// import Home from '../components/pages/Home';
import CircularProgress from "@material-ui/core/CircularProgress";
import { Route, Switch } from "react-router-dom";
const Home = lazy(() => import("./../components/pages/Home"));
const Services = lazy(() => import("./../components/pages/Services"));
const Forms = lazy(() => import("./../components/pages/Forms"));
const Investment = lazy(() => import("./../components/pages/Investment"));
const Trades = lazy(() => import("./../components/pages/Trades"));
const AboutUs = lazy(() => import("./../components/pages/AboutUs"));
// const StepSejam = lazy(() => import("./../components/pages/StepSejam"));
const Representation = lazy(() =>
  import("./../components/pages/Representation")
);
const AcountNumber = lazy(() => import("./../components/pages/AcountNumber"));
const Bourse = lazy(() => import("./../components/pages/Bourse"));
const News = lazy(() => import("./../components/pages/news"));
const NewsDetails = lazy(() => import("./../components/pages/newsPosts"));
const ContactUs = lazy(() => import("./../components/pages/contactUs"));
const IntelligenceCompetitions = lazy(() => import("./../components/pages/IntelligenceCompetitions"));


export default function RouteMain() {
  return (
    <div>
      <Suspense
        fallback={
          <div style={{ position: "absolute", left: "50%", top: "50%" }}>
            <CircularProgress />
          </div>
        }
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Services">
            <Services />
          </Route>
          <Route exact path="/Forms">
            <Forms />
          </Route>
          <Route exact path="/Investment">
            <Investment />
          </Route>
          <Route exact path="/Trades">
            <Trades />
          </Route>
          <Route exact path="/AboutUs">
            <AboutUs />
          </Route>
          {/* <Route exact path="/StepSejam">
            <StepSejam />
          </Route> */}
          <Route exact path="/Representation">
            <Representation />
          </Route>
          <Route exact path="/AcountNumber">
            <AcountNumber />
          </Route>
          <Route exact path="/Boursekala">
            <Bourse />
          </Route>
          <Route exact path="/News">
            <News />
          </Route>
          <Route exact path="/NewsDetails">
            <NewsDetails />
          </Route>
          <Route exact path="/ContactUS">
            <ContactUs />
          </Route>
          <Route exact path="/IntelligenceCompetitions">
            <IntelligenceCompetitions />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
