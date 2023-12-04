import { useState, useEffect } from 'react';

import { PetCard }from "./PetCard";
import { listPet } from "../api/pet/listPet";

export const PetGrid = ({ searchTerm, sortBy, filters }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const pets = await listPet();

        let filteredPets = pets.filter(pet => {
          const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase());
          const matchesFilters = filters.length === 0 || filters.includes(pet.type);
          return matchesSearch && matchesFilters;
        });

        if (sortBy === 'Name') {
          filteredPets.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'Age') {
          filteredPets.sort((a, b) => a.age - b.age);
        } else if (sortBy === 'Size') {
          filteredPets.sort((a, b) => a.size.localeCompare(b.size));
        }

        setPets(filteredPets);
      } catch {
        console.log("Couldn't fetch pets.")
      }
    }

    fetchPets();
  }, [searchTerm, sortBy, filters])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <div className="grid gap-4">
          {pets.map((pet, index) => {
            if (index % 3 === 0) {
              return (
                <PetCard pet={pet} key={pet.id} />
              );
            }
            return <></>
          })}
        </div>
      </div>
      <div>
        <div className="grid gap-4">
          {pets.map((pet, index) => {
            if (index % 3 === 1) {
              return (
                <PetCard pet={pet} key={pet.id} />
              );
            }
            return <></>
          })}
        </div>
      </div>
      <div>
        <div className="grid gap-4">
          {pets.map((pet, index) => {
            if (index % 3 === 2) {
              return (
                <PetCard pet={pet} key={pet.id} />
              );
            }
            return <></>
          })}
        </div>
      </div>
    </div>
  );
}