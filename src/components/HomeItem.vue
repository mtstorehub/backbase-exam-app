<template lang="html">
  <section class="home-item">
    <item v-bind:item="items[pointer]" v-bind:index="page" v-on:next-item="nextItem"></item>
    <div class="footer">
      <v-pagination v-model="page" :length="items.length" :total-visible="10" color="red" circle></v-pagination>
    </div>
  </section>
</template>

<script lang="js">
import Item from '../components/Item'
import { database } from '../config/firebase'
  export default  {
    name: 'home-item',
    components: {
      Item
    },

    firebase: {
      items: database.ref('exams')
    },

    props: [],
    beforeCreate() {
     
    },
    created() {
      console.log('created');
      
    },
    beforeMount() {
      console.log('before mount');
      this.items.map((item, index) => {
      Object.assign(item, {index: index});
      });
    },
    mounted() {
    console.log('mounted');
    
    },
    beforeUpdate() {
     
    },
    updated() {
       this.pointer = this.page - 1
    },

    data() {
      return {
        items: [],
        pointer: 0,
        page: 1
      }
    },

    methods: {
      nextItem() {
        this.page ++;
      }
    },
    computed: {
    }
}
</script>

<style scoped lang="scss">
.home-item {
  .footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   color: white;
   text-align: center;
  }
}
</style>
