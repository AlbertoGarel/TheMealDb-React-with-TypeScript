import image from "../../assets/img/robot_api_header.png";
import InitialsComponent from "../initialsComponent/InitialsComponent";
import "./NoResults.scss";

interface NoResultProps{
  GetNoResultLetterSelected: any
}

export default function NoResult({GetNoResultLetterSelected}: NoResultProps) {
  return (
    <div id="no-results">
      <img src={image} alt="Robot of app" />
      <h6>No results found for this search</h6>
      <InitialsComponent GetNoResultLetterSelected={GetNoResultLetterSelected} />
    </div>
  );
}
