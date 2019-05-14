<template lang="html">

  <section class="add-item">
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Item Name:</label>
                        <input type="text" class="form-control" v-model="newItem.name"/>
                    </div>
                    <div class="form-group">
                        <label>Item Price:</label>
                        <input type="text" class="form-control" v-model="newItem.price"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <md-button class="md-raised md-primary">Primary</md-button>
  </section>

</template>

<script lang="js">
import { database } from '../config/firebase'
  export default  {
    name: 'add-item',
    firebase: {
      items: database.ref('items')
    },

    props: [],
    mounted() {

    },
    data() {
      return {
        newItem: {
          name: '',
          price: ''
        }
      }
    },
    methods: {
      addItem() {
        this.$firebaseRefs.items.push({
          name: this.newItem.name,
          price: this.newItem.price
        })
        this.newItem.name = ''
        this.newItem.price = ''
        this.$router.push('/index')
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .add-item {

  }
</style>
