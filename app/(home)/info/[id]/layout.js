// export const metadata = {
//   title: "Animeverse || the best",
//   description: "Welcome to Animeverse – your ultimate anime destination! Stream your favorite anime titles in sync with friends and explore a vast library of series and movies. Join our vibrant community for an unforgettable anime-watching experience!",
// };

import { fetchData } from "@/lib/FetchData";

export async function generateMetadata({ params, searchParams }, parent) {
  try {
    const responseData = await fetchData(`/meta/anilist/minimalinfo/${params.id}`);

    if (!responseData || !responseData.data) {
      throw new Error("No data received from the server.");
    }

    const data = responseData.data;
    console.log("Fetched Data:", data);

    if (!data.title || !data.title.english) {
      throw new Error("Title information not available in the fetched data.");
    }

    return {
      title: `Animeverse - ${data.title.english}`,
      description: data.description || "No description available.",
      openGraph: {
        images: [data.image],
      },
    };
  } catch (error) {
    console.error("Error fetching or processing data:", error);
    return {
      title: "Error Occurred",
      // openGraph: {
      //   images: ['/error-image.jpg'],
      // },
    };
  }
}


export default function RootLayout({ children, params }) {
  console.log(params.id);
  return (
    children
  );
}
