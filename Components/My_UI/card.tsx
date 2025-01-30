import { Heart, Paperclip, PlayIcon, Share } from "lucide-react";
import Image from "next/image";

interface ImageProps {
  image: string;
}

export function Card_p({ image } : ImageProps) {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[250px] m-4 mb-8">
        <div className="bg-cover bg-center relative h-[200] overflow-hidden">
          <Image
            src={`/image/${image}.jpg`}
            alt="card image"
            width={250}
            height={300}
          />
          <div className="bg-white/25 p-4 rounded-full border-white border-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-fit z-10">
            <PlayIcon color="white" />
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">
            Beautiful Landscape
          </h1>
          <p className="text-sm text-gray-700 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-100">
          <Heart size={24} />
          <Share size={24} />
          <Paperclip size={24} />
        </div>
      </div>
    </div>
  );
}
