
import Head from "next/head";
import Header from "./Header";
import Main from "./Main";

export default function CookieStandAdmin() {
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screenbg-green-100 ">
      <Head>
        <title>Cookie Stand Admin</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
        />
      </Head>

      <Header/>

      <Main />

      <footer className="w-full h-10 py-2 text-center bg-green-500">
        All rights reserved &copy; Hamza Ahmad 2021
      </footer>
    </div>
  );
}
