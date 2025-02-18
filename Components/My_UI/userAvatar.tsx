import { auth } from "@/auth";
import Image from "next/image";

export async function UserAvater() {
  const session = await auth();

  console.log(session);

  return (
    <div className="flex gap-2">
      <Image
        src={`${session?.user?.image}`}
        alt={`${session?.user?.name}`}
        width={40}
        height={40}
        className="p-1 rounded-full"
      />
      <p>{session?.user?.name}</p>
    </div>
  );
}
