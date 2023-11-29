import { useState } from "react";
import { Metric, Subtitle } from "@tremor/react";

import { MainLayout } from "../components/MainLayout";
import { Search } from "../components/Search";
import { Sort } from "../components/Sort";
import { PetGrid } from "../components/PetGrid";

export default function Home({ user }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  return (
    <MainLayout user={user}>
      <Metric>Search for Pets</Metric>
      <Subtitle>Find your next best friend.</Subtitle>
      <div className="flex justify-between items-center mt-6 mb-6 gap-2">
        <Search setSearchTerm={setSearchTerm} />
        <Sort setSortBy={setSortBy}/>
      </div>
      <PetGrid />
    </MainLayout>
  );
}