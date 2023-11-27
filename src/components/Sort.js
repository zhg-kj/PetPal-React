import { Select, SelectItem } from "@tremor/react";

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

export const Sort = ({ setSortBy }) => {
  return (
    <Select
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
  )
}