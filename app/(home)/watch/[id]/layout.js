import { fetchData } from "@/lib/FetchData";

export async function generateMetadata({ params }, parent) {
  try {
    const responseData = await fetchData(`/meta/anilist/minimalinfo/${params.id}`);

    if (!responseData || !responseData.data) {
      throw new Error("No data received from the server.");
    }

    const data = responseData.data;

    if (!data.title || !data.title.english) {
      throw new Error("Title information not available in the fetched data.");
    }

    return {
      metadataBase: new URL('http://localhost:3000'),
      title: `Animeverse Watch - ${data.title.english}`,
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


export default function RootLayout({ children }) {
  return (
    children
  );
}
