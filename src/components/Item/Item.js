export default {
  name: 'item',
  components: {},
  props: {
    item: Object,
    index: Number,
    render: Boolean
  },
  data() {
    return {
      answer: '',
      buttonText: 'Submit',
      beforeSubmit: true,
    }
  },
  computed: {

  },
  mounted() {

  },
  updated() {

  },
  methods: {
    checkSolution() {
      if (!this.beforeSubmit) {
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
      if (rightAnswer === chooseAnswer) {
        this.$emit('set-tracked-item', { isDone: true, wrongAnswer: '' })
      } else {
        this.$emit('set-tracked-item', { isDone: true, wrongAnswer: chooseAnswer })
      }

    },

  }
}
