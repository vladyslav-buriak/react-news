import gif from "../images/loader.gif";
const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#fff",
      }}
    >
      <img
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        src={gif}
        alt="loader"
      />
    </div>
  );
};

export default Loader;
