import { Card, Flex, Metric, MultiSelect, MultiSelectItem, Select, SelectItem, Subtitle } from "@tremor/react";
import { useState } from "react";

import { MainLayout } from "../components/MainLayout";
import { ApplicationTable } from "../components/ApplicationTable";
import { Search } from "../components/Search";

const orders = [
  {
    title: 'Newest',
  },
  {
    title: 'Updated Recently',
  }
]

const statuses = [
  {
    title: 'Pending'
  },
  {
    title: 'Rejected'
  },
  {
    title: 'Accepted'
  }
]

export default function Applications({ user }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [filters, setFilters] = useState([]);

  return (
    <MainLayout user={user}>
      <Metric>Applications</Metric>
      <Subtitle>View and manage your {user.is_seeker ? '' : "shelter's"} applications.</Subtitle>
      <div className="flex justify-between items-center mt-6 mb-6 gap-2">
        <Search setSearchTerm={setSearchTerm} />
        <Flex className='gap-2 flex-wrap md:flex-nowrap' justifyContent='end' alignItems='center'>
          <MultiSelect
            value={filters}
            onValueChange={setFilters}
            placeholder="Filter by status..."
            className="max-w-xs"
          >
            {statuses.map((filter) => (
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
      <Card className='mt-6'>
        <ApplicationTable user={user} sortBy={sortBy} filters={filters} searchTerm={searchTerm} />
      </Card>
    </MainLayout>
  );
}