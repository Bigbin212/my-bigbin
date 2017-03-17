<template>
  <div>
    <input type="text" v-on:keyup.enter="inputword" v-model="item_"/>
    <ul>
      <li v-for="(item, i) in items" @click="remove(i)">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
 export default {
   data () {
     return {
       message: 'test',
       item_: '',
       items: []
     }
   },
   methods: {
     inputword () {
       let val = this.item_
       this.items.push(val)
       this.item_ = ''
     },
     remove (i) {
       this.items.splice(i, 1)
     }
   }
 }
</script>
<style>
</style>
