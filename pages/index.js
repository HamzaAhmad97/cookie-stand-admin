import CookieStandAdmin from "../components/CookieStandAdmin";
import LoginForm from "../components/LoginForm";
export default function Home() {
  let username = null
  return username ? <CookieStandAdmin /> : <LoginForm/>

}
