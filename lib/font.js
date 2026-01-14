import { Roboto_Slab } from "next/font/google";

export const rockwell = Roboto_Slab({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});


// import localFont from "next/font/local";

// export const rockwell = localFont({
//   src: [
//     { path: "../public/fonts/Rockwell-Regular.woff2", weight: "400" },
//     { path: "../public/fonts/Rockwell-Bold.woff2", weight: "700" },
//   ],
//   variable: "--font-primary",
//   display: "swap",
// });

// export const cocogoose = localFont({
//   src: "../public/fonts/Cocogoose-Letterpress.woff2",
//   variable: "--font-secondary",
//   display: "swap",
// });
