import monsterVideo from "../assets/imgs/Monster Energy Drink Ad.mp4";
export const Video = () => {
	return (
		<div className="video">
			<video src={monsterVideo} loop muted autoPlay></video>
		</div>
	);
};
