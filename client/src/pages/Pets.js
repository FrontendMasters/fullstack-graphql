import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import PetsList from "../components/PetsList";
import NewPetModal from "../components/NewPetModal";
import Loader from "../components/Loader";

const PETS_LIST = gql`
  query petsList {
    pets {
      id
      name
      type
      img
    }
  }
`;

const ADD_PET = gql`
  mutation ADD_PET($newPet: NewPetInput!) {
    addPet(input: $newPet) {
      id
      name
      type
      img
    }
  }
`;

export default function Pets() {
  const [modal, setModal] = useState(false);
  const { data, loading, error } = useQuery(PETS_LIST);
  const [createPet, mutationState] = useMutation(ADD_PET, {
    update(cache, { data: { addPet } }) {
      const { pets } = cache.readQuery({ query: PETS_LIST });
      cache.writeQuery({
        query: PETS_LIST,
        data: { pets: [addPet, ...pets] },
      });
    },
    optimisticResponse: {
      __typename: "Mutation",
      addPet: {
        id: "1234",
        name: "animalName",
        type: "catordog",
        img: "image",
        __typename: "Pet",
      },
    },
  });

  if (loading) return <Loader />;
  if (error || mutationState.error) return `Error! ${error.message}`;

  const onSubmit = (input) => {
    setModal(false);
    createPet({ variables: { newPet: input } });
  };

  if (modal) {
    return <NewPetModal onSubmit={onSubmit} onCancel={() => setModal(false)} />;
  }

  //   addPet:
  // id: "2QgKa2OJdoT2i7HdCcq1d"
  // img: "https://placedog.net/300/300"
  // name: "asdasasdadadsdasdsad"
  // type: "DOG"
  // __typename: "Pet"

  console.log(mutationState.data);

  return (
    data && (
      <div className="page pets-page">
        <section>
          <div className="row betwee-xs middle-xs">
            <div className="col-xs-10">
              <h1>Pets</h1>
            </div>

            <div className="col-xs-2">
              <button onClick={() => setModal(true)}>new pet</button>
            </div>
          </div>
        </section>
        <section>
          <PetsList pets={data.pets} />
        </section>
      </div>
    )
  );
}

// {
//   "id": "dasd4asd5",
//   "type": "Dog",
//   "name": "doggy",
//   "owner": "man"
// },
// {
//   "id": "dasd4asd5",
//   "type": "Cat",
//   "name": "BB",
//   "owner": "woman"
// },
// {
//   "id": "dasd4asd5",
//   "type": "Snake",
//   "name": "Dobby",
//   "owner": "Wizard"
// }
