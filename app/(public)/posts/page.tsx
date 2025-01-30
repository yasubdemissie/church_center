import { Card_p } from "@/Components/My_UI/card";

const photos = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

export default function PostPage() {
  return (
    <div className="flex justify-start flex-wrap">
      {photos.map((photo) => (
        <Card_p key={photo} />
      ))}
    </div>
  );
}
