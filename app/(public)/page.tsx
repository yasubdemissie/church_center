import { Button_link } from "@/Components/My_UI/button";
export default function HomeComponent() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <Button_link link="/about">About</Button_link>
    </div>
  );
}
