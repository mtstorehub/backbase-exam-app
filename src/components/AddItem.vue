<template lang="html">

  <section class="add-item">


    <div class="container">
      
      <md-field>
        <label>Type Question...</label>
        <md-textarea v-model="newExamItem.Question"></md-textarea>
      </md-field>

      <div>
        <md-list>
          <md-list-item v-for="item in newExamItem.Answers" :key="item.text">
            <md-radio v-model="radio" :value="item.text"/>
            <span class="md-list-item-text">{{item.text}}</span>
          </md-list-item>
        </md-list>
      </div>

      <md-field>
        <label></label>
        <md-icon>add</md-icon>
        <md-input placeholder="Add a solution" v-model="new_solution" @keyup.enter="addNewSolution()"></md-input>
      </md-field>
      <md-button class="md-raised primary-color pull-right" @click="addExam()">Save</md-button>
    </div>

  </section>

</template>

<script lang="js">
  import { database } from '../config/firebase'
  export default {
    name: 'add-item',
    firebase: {
      items: database.ref('items'),
      exams: database.ref('exams'),
    },

    props: [],
    mounted() {
    },
    data() {
      return {
        newItem: {
          name: '',
          price: ''
        },
        newExamItem: {
          Question: '',
          Answers: [],
        },
        radio: '',
        new_solution: ''
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
      },

      addExam() {
        this.newExamItem.Answers.map(item => {
          if(item.text === this.radio) item.right = true
        })
        this.$firebaseRefs.exams.push({
          Question: this.newExamItem.Question,
          Answers: this.newExamItem.Answers
        })
        this.newExamItem.Question = ''
        this.newExamItem.Answers = []
        this.$router.push('/index')
      },

      addNewSolution() {
        if(!this.new_solution)
          return;
        let arr = this.newExamItem.Answers;
        arr.push({
          text: this.new_solution,
          right: false
        })
        this.radio = this.new_solution
        this.new_solution = ''
      }
    },
    computed: {
    }
  }
</script>

<style scoped lang="scss">
  .add-item {
    .primary-color {
      background-color: #33b5e5 !important;
      color: #fff !important;
    }

    md-radio {
      display: flex;
    }

    .pull-right {
      float: right;
    }
  }
</style>