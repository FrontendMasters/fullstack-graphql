import React from 'react'
// import gql from "graphql-tag"
// import { useQuery } from '@apollo/react-hooks'
// import Loader from '../components/Loading'



// const CREATE_OWNER = gql`
//   query getUser($username: Sting!) {
//     user(username: $username) {
//       id
//       username
//     }
//   }
// `

export default function User () {
  // const { data, loading, error } = useQuery(GET_PETS, {variables: {input: {user: '12345'}}});

  // if (loading) return <Loader />;
  // if (error) return <p>ERROR</p>;

  return (
    <div className="pets">
      User
    </div>
  )
}
