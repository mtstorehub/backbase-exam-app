<template lang="html">

  <section class="list-item">
    <div>
    <h1>List Item</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Item Price</th>
          <th colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="item of items" :key="item['.key']">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>
                <router-link :to="{ name: 'Edit', params: {id: item['.key']} }" class="btn btn-warning">
                  Edit
                </router-link>
            </td>
            <td>
              <button @click="deleteItem(item['.key'])" class="btn btn-danger">Delete</button>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
  </section>

</template>

<script lang="js">
import { database } from '../config/firebase'
  export default  {
    name: 'list-item',
    props: [],
    mounted() {

    },
    data() {
      return {
        items: []
      }
    },
    firebase: {
      items: database.ref('items')
    },
    methods: {
      deleteItem(key) {
        this.$firebaseRefs.items.child(key).remove()
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .list-item {

  }
</style>
