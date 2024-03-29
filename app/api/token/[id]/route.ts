import { NextResponse } from "next/server";

const IMAGES = [
  {
    id: 0,
    url: "https://images.ctfassets.net/gjyjx7gst9lo/17JXIUZvQlh8r1Ms5Txhld/97cc131641d762fb27e6ff721e4fe409/state-of-staking.png?fm=avif&q=100&w=650"
  },
  {
    id: 1,
    url: "https://images.ctfassets.net/gjyjx7gst9lo/6Nk8Yn8W18SM3w5C5URS9E/8486407f435417223b89d52b17922c7a/Brand_Evolution-1x1_2x.png?fm=avif&q=100&w=650"
  },
  {
    id: 2,
    url: "https://images.ctfassets.net/gjyjx7gst9lo/2djbpxDbGBZIesyMDjqaAV/20c1f5274023a812b887985fc51233d3/why-codefi-1.png?fm=webp&q=85"
  },
  { 
    id: 3,
    url: "https://images.ctfassets.net/9sy2a0egs6zh/5XRhOQHkOJNsBU8z6O8Jbv/546cc006d9b0dd1064e1aefd36ad1034/Built_for_Developers_Image.png?w=948&h=545&q=80&fm=webp"
  },
  {
    id: 4,
    url: "https://images.ctfassets.net/gjyjx7gst9lo/5jvatLAMOoIkbmbUPZJd6s/54a3ffec933bc6818c2d56fbe7e60c80/How_Linea_Works_to_Build_the_World_s_Most_Secure_L2_1x1.png?fm=avif&q=100&w=650"
  },
  {
    id: 5,
    url: "https://images.ctfassets.net/gjyjx7gst9lo/75ltnLFXkl5Z6eaaWhgjTZ/ca4d4d45f96f59a921afa5b8987b4df6/launch-mm-staking.png?fm=avif&q=100&w=650"
  },
  {
    id: 6,
    url: "https://dummynfts.vercel.app/infura1.webp"
  },
  {
    id: 7,
    url: "https://dummynfts.vercel.app/infura2.webp"
  },
  {
    id: 8,
    url: "https://dummynfts.vercel.app/infura3.webp"
  },
  {
    id: 9,
    url: "https://images.ctfassets.net/gjyjx7gst9lo/5nQwydGoYf7sBcIfzsTExR/42fd96a42ff2a2d99c6c1c69ddf5590b/Shanghai_Campaign-1x1_2x.png?fm=avif&q=100&w=650"
  }
];


export const GET = async (req: Request, { params } : {params: { id: string }}) => {
  const id = parseInt(params.id);
  const metadata = {
    name: `dummy#${id}`,
    description: `A unique perspective based on the number ${id}`,
    image: IMAGES[id % IMAGES.length].url,
    external_url: `https://dummynfts.vercel.app/api/token/${id}`,
    attributes: []
  }
  return NextResponse.json(metadata);
};