//context.js : 전역적으로 상대를 공유할수있도록 도와주는 도구
import { createContext, useContext } from "react";

let login = {userid:"홍길동", isLogin:true};
const loginContext = createContext(login);
