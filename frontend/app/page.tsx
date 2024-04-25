import Image from "next/image";
import LoginButton from "@/src/components/LoginButton";

export default function Home() {
  return (
    <>
      <h1>Welcome to CelescDev!</h1>
      <form action="localhost:8000/" method="post">
        <LoginButton/>
      </form>
      
    </>
  );
}
