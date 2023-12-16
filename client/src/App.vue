<script setup>
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { watchEffect, computed } from 'vue';

const siteInfoQuery = gql`
  query {
    site {
      name
      description
      logo
    }
  }
`;

const { result, loading, error } = useQuery(siteInfoQuery);
const siteInfo = computed(() => result.value?.site ?? {}); // Access 'site' instead of 'allSites'

watchEffect(() => {
  if (loading.value) {
    console.log('Loading data...');
  } else if (error.value) {
    console.error('Error fetching data:', error.value);
  } else {
    console.log('Data:', siteInfo.value);
  }
});
</script>

<template>
  <div>
    <h1>Django + Vue Prototype</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error fetching data</div>
    <div v-else>
      <h2>{{ siteInfo.name }}</h2>
      <p>{{ siteInfo.description }}</p>
      <img :src="siteInfo.logo" alt="Site Logo" />
    </div>
  </div>
</template>

<style>
</style>