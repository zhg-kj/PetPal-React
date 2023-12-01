import { Button } from "@tremor/react";
import { useNavigate } from "react-router-dom";

export const PetCard = ({ pet }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img src={pet.image} className="w-full rounded-t-lg" alt={pet.name} />
      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2">{pet.name}</h5>
        <p className="text-sm text-gray-600 mb-4">Age: {pet.age} years | Size: {pet.size}</p>
        <Button onClick={() => navigate('/details', {state: {pet: pet}})}>
          View Details
        </Button>
      </div>
    </div>
  );
}