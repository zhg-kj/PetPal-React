import { useState, useEffect } from "react";
import { Metric, Grid, Title, Card, Subtitle } from "@tremor/react";
import { useLocation } from "react-router-dom";

import { MainLayout } from "../components/MainLayout";
import { ImageCarousel } from "../components/ImageCarousel";
import { getShelter } from "../api/getShelter";

const images = [
  "https://cdn.discordapp.com/attachments/861479282915803137/1161299225800364053/IMG_8754.jpg?ex=6537cb2f&is=6525562f&hm=31ead8c09165b30f6aa786ae73dc7720fd68d7f6e650fd90ceef35d48ee13584&",
  "https://cdn.discordapp.com/attachments/861479282915803137/1161299225569669181/IMG_8755.jpg?ex=6537cb2f&is=6525562f&hm=f646b1a4ac044ef726eb6b1c2a78cf55a29417e2aa42f8393058804def4898c0&",
  "https://cdn.discordapp.com/attachments/861479282915803137/1161299226173640814/IMG_8753.jpg?ex=6537cb2f&is=6525562f&hm=cdacbe2051aaa00dd4848fb6716af8126a674b43ec52d9a3384f63d8b601a1b9&",
]

export default function ShelterDetails({ user }) {
  const location = useLocation();

  const [shelter, setShelter] = useState({});

  useEffect(() => {
    const fetchShelter = async () => {
      try {
        const shelter = await getShelter(location.state.shelterId);
        setShelter(shelter)
      } catch {
        console.log("Couldn't get shelter details");
      }
    }

    fetchShelter();
  }, location.state.shelterId)

  return (
    <MainLayout user={user}>
      <Grid numItemsMd={2} className="mt-6 gap-6">
        <div className='flex flex-col justify-center'>
          <ImageCarousel images={images} />
        </div>
        <div className='flex flex-col justify-center'>
          <Metric>We are</Metric>
          <Metric>{shelter.name}</Metric>
        </div>
      </Grid>
      <Metric className='mt-6'>Reviews</Metric>
    </MainLayout>
  );
}