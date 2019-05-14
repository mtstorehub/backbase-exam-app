<template lang="html">

  <section class="edit-item">
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Edit Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateItem">
                    <div class="form-group">
                        <label>Item Name:</label>
                        <input type="text" class="form-control" v-model="newItem.name"/>
                    </div>
                    <div class="form-group">
                        <label>Item Price:</label>
                        <input type="text" class="form-control" v-model="newItem.price" />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Update Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </section>

</template>

<script lang="js">
import { database } from '../config/firebase'
  export default  {
    name: 'edit-item',
    props: [],
    mounted() {
      let item = this.itemsObj[this.$route.params.id]
      this.newItem = {
        name: item.name,
        price: item.price
      }
    },
    firebase: {
    items: database.ref('items'),
    itemsObj: {
      source: database.ref('items'),
      asObject: true
    }
  },
    data() {
      return {
        newItem: {}
      }
    },
    methods: {
      updateItem() {
        this.$firebaseRefs.items.child(this.$route.params.id).set(this.newItem);
        this.$router.push('/index')
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .edit-item {

  }
</style>
