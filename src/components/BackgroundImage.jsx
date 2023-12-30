import Bg from "./Images/netflix-background.jpg";

const BackgroundImage = () => {
  return (
    <div>
      <img
        src={Bg}
        alt="Background-Image"
        style={{ width: "100vw", height: "100vh", opacity: "0.7" }}
      />
    </div>
  );
};
export default BackgroundImage;
