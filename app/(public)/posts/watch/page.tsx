import Video from "next-video";
import getStarted from "@/videos/get-started.mp4";
// type params = Promise<{ slug: string }>;
type searchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function WatchPage({ searchParams }: searchParams) {
  const { v } = await searchParams;
  //   return (
  //     <div>
  //       <h1>{v}</h1>
  //       <video controls width={400} height={200} poster={`/image/${v}.jpg`}>
  //         <source
  //           src="https://www.w3schools.com/html/mov_bbb.mp4"
  //           type="video/mp4"
  //         />
  //         <source
  //           src="https://www.w3schools.com/html/mov_bbb.ogg"
  //           type="video/ogg"\*
  //         />
  //       </video>
  //     </div>
  //   );
  // }

  // export default function Page() {
  return <Video src={getStarted} style={{width: "700px", overflow: "hidden"}} poster={`/image/${v}.jpg`} />;
}
