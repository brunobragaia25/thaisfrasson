import localFont from "next/font/local";
import { Fragment_Mono } from "next/font/google";

export const degular = localFont({
  src: [
    { path: "../fonts/Degular Thin.otf", weight: "100", style: "normal" },
    { path: "../fonts/Degular Light.otf", weight: "300", style: "normal" },
    { path: "../fonts/Degular Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/Degula Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/Degular Semibold.otf", weight: "600", style: "normal" },
    { path: "../fonts/Degular Bold.otf", weight: "700", style: "normal" },
    { path: "../fonts/Degular Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-degular",
  display: "swap",
});

export const carlaSans = localFont({
  src: [
    { path: "../fonts/CarlaSans-Light.otf", weight: "300", style: "normal" },
    { path: "../fonts/CarlaSans.otf", weight: "400", style: "normal" },
    { path: "../fonts/CarlaSans-Semibold.otf", weight: "600", style: "normal" },
    { path: "../fonts/CarlaSans-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-carla-sans",
  display: "swap",
});

export const neueMontreal = localFont({
  src: [
    { path: "../fonts/NeueMontreal-Light.otf", weight: "300", style: "normal" },
    { path: "../fonts/NeueMontreal-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/NeueMontreal-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/NeueMontreal-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});

export const fragmentMono = Fragment_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fragment-mono",
  display: "swap",
});
