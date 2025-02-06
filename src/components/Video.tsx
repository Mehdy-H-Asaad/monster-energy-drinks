import monsterVideo from "../assets/imgs/Monster Energy Drink Ad.mp4";
import Poster from "../assets/imgs/poster.png";
export const Video = () => {
	return (
		<div className="video">
			<video src={monsterVideo} poster={Poster} loop muted autoPlay></video>
		</div>
	);
};
