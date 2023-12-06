import "./CreateCont.css";

const CreateCont = () => {
  return (
    <div className="createcont" onClick={() => {
      document.querySelector(".createcont").style.display = "none";
      document.querySelector(".wrapperLogin").style.display = "block";
    }}>
      Login
    </div>
  );
};

export default CreateCont;
