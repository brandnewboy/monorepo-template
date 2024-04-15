<template>
  <div> 
    <h1>example:vue2</h1>
  <h2>{{ title }}</h2>
  </div>
</template>

<script>
import { title } from '@web-monitoring/vue2'
export default {
  name: 'App',
  data: () => ({
    title
  })
  
}
</script>

<style>

</style>
