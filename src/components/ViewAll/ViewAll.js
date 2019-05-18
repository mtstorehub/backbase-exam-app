import { database } from '../../config/firebase'
export default {
  name: 'view-all',
  components: {},
  props: [],
  firebase: {
    items: database.ref('exams')
  },
  data () {
    return {
      items: [],
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
