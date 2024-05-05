<template>
  <router-view />
</template>

<script setup>
import axios from 'axios';
import { useQuery } from "@vue/apollo-composable";
import {getCourses} from '../src/queries/courses/CourseQueries'
import gql from 'graphql-tag';
import { onBeforeMount } from 'vue';
import {getCoursesAxios} from './api/course'


onBeforeMount(async () => {

  // Make Axios POST request to GraphQL endpoint
    // axios.post('http://localhost:5005/graphql', {
    //   query: getCourses
    // })
    // .then(response => {
    //   // Handle successful response

    // })
    // .catch(error => {
    //   // Handle error
   
    // });
  const data = await getCoursesAxios(getCourses);
})

//const {result} = useQuery(gql`${getCourses}`);

// const courses = computed(() => result.value?.courses ?? [])

// watchEffect(() => {
//   console.log(courses)
// })
</script>
