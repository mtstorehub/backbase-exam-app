<template lang="html">
  <section class="home-item">
    <div class="md-layout md-gutter">
      <div class="md-layout-item text-right">
        <v-btn color="red darken-4" dark @click="showCorrectItemsState = !showCorrectItemsState; showWrongItemsState = false">
          Correct
          <v-badge color="light-blue">
            <template v-slot:badge>
              <span>{{trackedCorrectItems.length}}</span>
            </template>
            <v-icon dark>check_circle</v-icon>
          </v-badge>
        </v-btn>
        <v-btn color="red darken-4" dark @click="showWrongItemsState = !showWrongItemsState; showCorrectItemsState = false">
          Wrong
          <v-badge color="purple">
            <template v-slot:badge>
  <span>{{trackedWrongItems.length}}</span>
</template>
            <v-icon dark>block</v-icon>
          </v-badge>
        </v-btn>
      </div>
    </div>

    <div class="md-layout md-gutter" v-if="showCorrectItemsState">
      <div class="md-layout-item">
         <v-item-group>
          <v-subheader>Correct Items</v-subheader>
          <v-item v-for="n in trackedCorrectItems" :key="n">
            <v-chip
              slot-scope="{ active }"
              :selected="active"
              @click="page = n+1">
              # {{ n+1 }}
            </v-chip>
          </v-item>
        </v-item-group>
      </div>
    </div>

    <div class="md-layout md-gutter" v-if="showWrongItemsState">
      <div class="md-layout-item">
         <v-item-group>
          <v-subheader>Wrong Items</v-subheader>
          <v-item v-for="n in trackedWrongItems" :key="n">
            <v-chip
              slot-scope="{ active }"
              :selected="active"
              @click="page = n+1">
              # {{ n+1 }}
            </v-chip>
          </v-item>
        </v-item-group>
      </div>
    </div>

    <item 
      :item="items[pointer]" 
      :index="page" 
      :next-item="nextItem" 
      @set-tracked-item="markAsTrackedItem"
      :render="itemrender">
    </item>
    
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
      setTimeout(() => {
        this.shuffle(this.items)
      }, 4000);
      setInterval(() => {
        if (this.progressAmount === 100) {
          this.itemrender = true
        }
        this.progressAmount += 25
      }, 1000);
    },
    mounted() {
    this.items.map((item, index) => {
      Object.assign(item, {index: index});
      });
    },
    beforeUpdate() {
    },
    updated() {
       this.pointer = this.page - 1
    },

    data() {
      return {
        items: [],
        trackedCorrectItems: [],
        trackedWrongItems: [],
        pointer: 0,
        page: 1,
        showCorrectItemsState: false,
        showWrongItemsState: false,
        progressAmount: 0,
        itemrender: false
      }
    },

    methods: {
      shuffle(array) {
        array.sort(() => Math.random() - 0.5)
      },
      nextItem() {
        if(this.items.length > this.page)
            this.page ++;
      },
      routeItem(n) {
        this.page = n + 1
        
      },
      markAsTrackedItem(_trackedData) {
        Object.assign(this.items[this.pointer], _trackedData);
        if (_trackedData.wrongAnswer === '')  {
          this.trackedCorrectItems.push(this.pointer)
        } else {
          this.trackedWrongItems.push(this.pointer)
        }
      },
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
    z-index: 1;
    .v-pagination {
      color: black;
    }
  }
}
</style>
