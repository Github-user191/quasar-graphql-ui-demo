import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable';
import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
    const httpLink = createHttpLink({
        uri: "http://localhost:5005/graphql",


    });

    const apolloClient = new ApolloClient({

        link: httpLink,
        cache: new InMemoryCache()
    })

    app.provide(DefaultApolloClient, apolloClient);
})
