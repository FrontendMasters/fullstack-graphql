import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import PetsList from "../components/PetsList";
import NewPetModal from "../components/NewPetModal";
import Loader from "../components/Loader";

const GET_ALL_PETS = gql`
  query getAllPets {
    pets {
      id
      name
      type
      img
    }
  }
`;

const ADD_PET = gql`
  mutation createPet($newPetInput: NewPetInput!) {
    addPet(input: $newPetInput) {
      id
      name
      type
      img
    }
  }
`;

export default function Pets() {
  const [modal, setModal] = useState(false);
  const { data, loading, error } = useQuery(GET_ALL_PETS);
  const [addPet, { newPetData = data }] = useMutation(ADD_PET, {
    /* updates the local cache when new pet is added */
    update(
      cache,
      {
        data: { addPet }
      }
    ) {
      const { pets } = cache.readQuery({ query: GET_ALL_PETS });
      cache.writeQuery({
        // updating athe all pets query... little weird
        query: GET_ALL_PETS,
        data: { pets: [addPet].concat(pets) }
      });
    }
  });

  const onSubmit = input => {
    addPet({
      variables: { newPetInput: input },
      /* optimistic can be added here or written into the useMutation 
      hook here we have access to variables that the user acually enterd */
      optimisticResponse: {
        __typename: "Pet",
        addPet: {
          __typename: "asdf",
          id: "asdf",
          name: "optomistic",
          type: "DOG",
          img: "NOTHIN"
        }
      }
    });
    setModal(false);
  };

  if (loading) {
    return <Loader />;
  }

  if (error || newPetData.error) {
    return <p>There is an error</p>;
  }

  if (modal) {
    return <NewPetModal onSubmit={onSubmit} onCancel={() => setModal(false)} />;
  }

  return (
    <div className='page pets-page'>
      <section>
        <div className='row betwee-xs middle-xs'>
          <div className='col-xs-10'>
            <h1>Pets</h1>
          </div>

          <div className='col-xs-2'>
            <button onClick={() => setModal(true)}>new pet</button>
          </div>
        </div>
      </section>
      <section>
        <PetsList pets={data.pets} />
      </section>
    </div>
  );
}
