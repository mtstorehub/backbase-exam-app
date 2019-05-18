export default {
  name: 'item',
  components: {},
  props: {
    item: Object,
    index: Number
  },
  data () {
    return {
      answer: '',
      buttonText: 'Submit',
      beforeSubmit: true
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    checkSolution() {
      if(!this.beforeSubmit){
        this.beforeSubmit = true
        this.buttonText = 'Submit'
        this.answer = ''
        this.$emit('next-item');
        return;
      }
      this.beforeSubmit = false;
      this.buttonText = 'Next';
      let rightAnswer = this.item.Answers.find(answer => answer.right).text;
      let chooseAnswer = this.answer;
      if(rightAnswer === chooseAnswer)
        console.log("right");
      else console.log("wrong");
      
    }
  }
}
