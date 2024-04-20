import { GraphQLWsLink } from "@apollo/client/link/subscriptions"
import { createClient} from 'graphql-ws'
import {HttpLink, split} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities'

const LinkFunc = () => {
    //wsLink for subscriptions
    const wsLink = new GraphQLWsLink(
        createClient({
          url: 'ws://localhost:3000'
        }
    ));

    //http link
    const httpLink = new HttpLink({
        uri : "http://localhost:3000"
    })

    const splitLink = split(
        ({ query }) => {
          const definition = getMainDefinition(query)
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          );
        },
        wsLink,
        httpLink,
    );
    return splitLink
}

export default LinkFunc