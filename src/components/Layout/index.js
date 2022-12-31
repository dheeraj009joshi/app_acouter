import React, { useState, useEffect } from "react";
import LayoutStyle from "./style";
import Card from "../Card";
import Header from "../Header";
import CookiesStrip from "../CookiesStrip";
import CollectionInformation from "../CollectionInformation";
import Thankyou from "../Thankyou";
import CrowdFilter from "../CrowdFilter";
import SmileWelcome from "../../assets/images/smile-welcome.svg";
import axios from "axios";
import XMLParser from "react-xml-parser";
import Loader from "../Loader.js";
import RatingCard from "../RatingCard";

const Layout = () => {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState();
  const [cityState, setCityState] = useState();
  const [isScouter, setIsScouter] = useState();
  const [scouterOptions, setScouterOptions] = useState([]);
  const [places, setPlaces] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [cityId, setCityId] = useState();
  const [showModel, setShowModel] = useState(false);
  const firstStep = {
    question:
      "Helping you find the most relevant nightlife hotspots in 4 easy steps.",
    image: SmileWelcome,
    catTitle: "Start",
  };

  const secondStep = {
    question:
      "Before we get started we need to know where you are, Allow your location to start finding your nightlife",
    image: SmileWelcome,
    catTitle: "Get Location",
  };

  useEffect(() => {
    if (location?.latitude && location?.longitude) {
      setIsLoading(true);
      axios
        .post(
          `https://nominatim.openstreetmap.org/reverse?format=xml&lat=${location.latitude}&lon=${location.longitude}&zoom=18&addressdetails=1`
        )
        .then((res) => {
          var xml = new XMLParser().parseFromString(res.data);
          let cityState = {
            state: xml.children[1].children[7].value,
            city: xml.children[1].children[5].value,
          };
          setCityState(cityState);
        });
    }
  }, [location]);

  useEffect(() => {
    if (cityState) {
      setIsLoading(true);
      let data = {
        StoredProcedureName: "LOAD_CITY",
        // Params1: "Atlanta",
        Params1: cityState.city,
        // Params2: "Georgia",
        Params2: cityState.state,
      };

      axios
        .post(
          "https://scouterextraction001.azurewebsites.net/api/v1/Mobile/RequestForAPI",
          data
        )
        .then((res) => {
          if (res.data.data.length) {
            setIsScouter(res.data.data[0].isScouter);
            setCityId(res.data.data[0].cityId);
            setIsLoading(false);
          } else {
            setIsScouter(false);
            setIsLoading(false);
          }
        });
    }
  }, [cityState]);

  return (
    <LayoutStyle>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {step == 1 && <Card data={firstStep} setStep={setStep} step={step} />}
          {step == 2 && (
            <Card
              data={secondStep}
              setStep={setStep}
              step={step}
              setLocation={setLocation}
            />
          )}

          {step == 3 ? (
            isScouter ? (
              <CrowdFilter
                location={location}
                setStep={setStep}
                setPlaces={setPlaces}
                cityId={cityId}
                setIsLoading={setIsLoading}
              />
            ) : (
              <CollectionInformation setShowModel={setShowModel} />
            )
          ) : (
            <></>
          )}
          {showModel && <Thankyou />}
          {step == 4 && <RatingCard places={places} />}
        </>
      )}
      <CookiesStrip />
    </LayoutStyle>
  );
};

export default Layout;
