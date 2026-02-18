import { teamDescription } from "./teamDescription";
import TeamSlider from "./TeamSlider";

function TeamSec() {
  return(
    <section className="pt-120 pb-120 bg_lightSky">
      <div className="container">
        <h4 className="sec-sub-title text-center mb-4 mb-lg-5"><small>{teamDescription.smalltitle}</small> {teamDescription.title}</h4>
      </div>
      <div className="container team_slider">
        <TeamSlider />
      </div>
    </section>
  );
}
export default TeamSec;