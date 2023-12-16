import { createApp, provide, h, render } from 'vue'
import './style.css'
import App from './App.vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'; // Import DefaultApolloClient


//HTTP connection to the API
const httpLink = createHttpLink({
    uri: 'http://127.0.0.1:8000/graphql',
})

//Cache implementation
const cache = new InMemoryCache()

//Create instance of apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App),
})

app.mount('#app')
