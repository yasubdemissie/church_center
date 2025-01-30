type params = Promise<{ slug: string }>;
type searchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function WatchPage({ searchParams }: searchParams) {
  const { v } = await searchParams;
  return (
    <div>
      <h1>{v}</h1>
      <video controls width={400} height={200} poster={`/image/${v}.jpg`}>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        <source
          src="https://www.w3schools.com/html/mov_bbb.ogg"
          type="video/ogg"
        />
      </video>
    </div>
  );
}
