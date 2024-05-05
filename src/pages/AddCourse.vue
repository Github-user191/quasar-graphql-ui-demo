<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit.prevent="onSubmit"
      class="q-gutter-md"
    >

    {{course}}
      <q-input
        filled
        v-model="course.Name"
        label="Name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-select
        filled
        v-model="course.Subject"
        label="Subject"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>

  </div>
</template>

<script setup>

import {ref} from 'vue';

const course = ref({});

const onSubmit = () => {

}

</script>