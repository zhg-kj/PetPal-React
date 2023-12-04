import { useState } from "react";
import { Flex, Metric, MultiSelect, MultiSelectItem, Select, SelectItem, Subtitle } from "@tremor/react";

import { MainLayout } from "../components/MainLayout";
import { Search } from "../components/Search";
import { PetGrid } from "../components/PetGrid";

const orders = [
  {
    title: 'Name',
  },
  {
    title: 'Age',
  },
  {
    title: 'Size',
  }
]

const types = [
  {
    title: 'Dog'
  },
  {
    title: 'Cat'
  }
]

export default function Home({ user }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [filters, setFilters] = useState([]);

  return (
    <MainLayout user={user}>
      <Metric>Search for Pets</Metric>
      <Subtitle>Find your next best friend.</Subtitle>
      <div className="flex justify-between items-center mt-6 mb-6 gap-2">
        <Search setSearchTerm={setSearchTerm} />
        <Flex className='gap-2 flex-wrap md:flex-nowrap' justifyContent='end' alignItems='center'>
          <MultiSelect
            value={filters}
            onValueChange={setFilters}
            placeholder="Filter by type..."
            className="max-w-xs"
          >
            {types.map((filter) => (
              <MultiSelectItem key={filter.title} value={filter.title}>
                {filter.title}
              </MultiSelectItem>
            ))}
          </MultiSelect>
          <Select
            value={sortBy}
            onValueChange={setSortBy}
            placeholder="Sort by..."
            className="max-w-xs"
          >
            {orders.map((order) => (
              <SelectItem key={order.title} value={order.title}>
                {order.title}
              </SelectItem>
            ))}
          </Select>
        </Flex>
      </div>
      <PetGrid searchTerm={searchTerm} sortBy={sortBy} filters={filters}/>
    </MainLayout>
  );
}