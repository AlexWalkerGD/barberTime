import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const GoogleLogin = () => {
  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.log("Erro ao fazer login", err);
    }
  };

  return (
    <button
      onClick={login}
      className="flex justify-center items-center mt-5 p-2 bg-white/10 border-2 rounded-lg backdrop-blur-lg hover:bg-white/20 transition"
    >
      Login com Google
    </button>
  );
};

export default GoogleLogin;
