import { Button, Input } from "antd";
import "./index.scss";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
const Login = () => {
  const navigate = useNavigate();
  const handleLoginGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log("Credential", credential);
        const user = result.user;
        console.log("User", user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Header />
      <div className="login">
        <iframe
          className="login__video"
          src="https://player.vimeo.com/video/695343114?h=1a71dea0f0?controls=0&sidedock=0&title=0&autoplay=1&muted=1&loop=1"
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div className="login__wrapper">
          <div className="login__container">
            <div className="login__logo">
              <img
                src="https://movix-main.vercel.app/assets/movix-logo-d720c325.svg"
                width={164}
                height={50}
                alt=""
              ></img>
            </div>
            <div className="login__content">
              <h1>Login with your acccount</h1>
              <Input placeholder="Username" type="text"></Input>
              <Input placeholder="Password" type="password"></Input>
              <Button>
                <b>Login</b>
              </Button>
              <Button onClick={handleLoginGoogle} style={{ margin: "20px 0" }}>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
                    width={24}
                    alt="logo"
                  ></img>
                </span>
                Login with google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
