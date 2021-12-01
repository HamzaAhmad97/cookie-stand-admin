import CookieStandAdmin from "../components/CookieStandAdmin";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../contexts/auth";
export default function Home() {
  const {user} = useAuth()
  return user ? <CookieStandAdmin /> : <LoginForm/>

}
