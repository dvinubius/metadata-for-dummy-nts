import { NextResponse } from "next/server";

const IMAGES = [
  {
    id: 0,
    url: "https://videos.ctfassets.net/gjyjx7gst9lo/7Bd17vpEKx7ftNsc5QfD1b/644e37f0b12bc27a8f87a39125eee285/MM_01__2_.mp4"
  },
  {
    id: 1,
    url: "https://videos.ctfassets.net/gjyjx7gst9lo/2ZMlrExSdKTRKMLjFO8V8O/1e5d4fc1850f7f2932c4009915b13ade/MMDEV_01.mp4"
  },
  {
    id: 3,
    url: "https://videos.ctfassets.net/gjyjx7gst9lo/6aOfXrgejtRg7fZdPepkJN/818428765f2932c5fb1587fbcb097713/Linea_01__1_.mp4"
  }
];


export const GET = async (req: Request, { params } : {params: { id: string }}) => {
  const id = parseInt(params.id);
  const metadata = {
    name: `#${id}`,
    description: `A unique view number ${id + 1}`,
    image: IMAGES[id % IMAGES.length].url,
    external_url: `https://dummynfts.vercel.app/api/token/${id}`,
    attributes: []
  }
  return NextResponse.json(metadata);
};