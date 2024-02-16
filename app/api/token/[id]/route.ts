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
    id: 2,
    url: "https://videos.ctfassets.net/gjyjx7gst9lo/6aOfXrgejtRg7fZdPepkJN/818428765f2932c5fb1587fbcb097713/Linea_01__1_.mp4"
  },
  {
    id: 3,
    url: "https://images.ctfassets.net/gjyjx7gst9lo/6Nk8Yn8W18SM3w5C5URS9E/8486407f435417223b89d52b17922c7a/Brand_Evolution-1x1_2x.png?fm=avif&q=100&w=650"
  },
  {
    id: 4,
    url: "https://videos.ctfassets.net/gjyjx7gst9lo/6JYWUxs5Z140XeNpC9KngE/9591f2bb909506b5f7b4cab034d8b6a6/MM_02__1_.mp4"
  },
  {
    id: 5,
    url: "https://videos.ctfassets.net/gjyjx7gst9lo/7A59wssQrNAohCvLkIZlRs/ffe63e793a0f380138cdf4af66071bc4/MM_03__3_.mp4"
  },
  { 
    id: 6,
    url: "https://videos.ctfassets.net/gjyjx7gst9lo/1F80KvnLLi6YMAoqQSQC10/31033e103c924f2f06a8de1555a35fba/MMDEV_02.mp4"
  },
  {
    id: 7,
    url: "https://videos.ctfassets.net/gjyjx7gst9lo/7aF65nhm6B2jYlO4raI6no/f93e7bb61cdc4685183f3f3560b47d78/Infura_02__1_.mp4"
  },
  {
    id: 8,
    url: "https://videos.ctfassets.net/gjyjx7gst9lo/lwZ3TLLpLsjLdNhpZVRGr/b69d039b66e2f7067ac5d6fbf0b0cbe2/Infura_01__1_.mp4"
  },
  {
    id: 9,
    url: "https://images.ctfassets.net/gjyjx7gst9lo/4dchcVrXP4V9bFActogfll/f6d128cb008197b10eb73020ce01e9b2/Meet-the-Decentralized-Infrastructure-Network-Partners-1x1.png?fm=avif&q=100&w=650"
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