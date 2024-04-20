import { gql } from "@apollo/client";

const PIECE_SUBSCRIPTION = gql`
subscription Subscription($room : Int!) {
  message(room : $room){
    from{
      x
      y
    }
    to{
      x
      y
    }
    color
  }
}`

const PIECE_UPDATION = gql`
mutation Mutation($fromX: Int!, $fromY: Int!, $toX: Int!, $toY: Int!, $room: Int!,$color: String!){
  addMessage(fromX: $fromX, fromY: $fromY, toX: $toX, toY: $toY, room: $room,color : $color)
}`

export {PIECE_SUBSCRIPTION,PIECE_UPDATION}