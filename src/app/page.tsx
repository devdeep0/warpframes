import { Metadata } from "next";
import { ClientPage } from "./ClientRender";

const appUrl = process.env.NEXT_PUBLIC_URL;

const frame = {
  version: "next",
  imageUrl: `${appUrl}/opengraph-image`,
  button: {
    title: "Ruture Labs",
    action: {
      type: "launch_frame",
      name: "Rupture Labs",
      url: appUrl,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
    },
  },
};

export const revalidate = 300;

export const generateMetadata = (): Metadata => {
  return {
    title: "Rupture Labs",
    openGraph: {
      title: "Rupture Labs",
      description: "Play it out and enjoy",
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
};

export default function Home() {
  return <ClientPage />;
}