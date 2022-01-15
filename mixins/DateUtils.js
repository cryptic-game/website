export default {
  methods: {
    getDateWithLZero (date) {
      console.log(date)
      // eslint-disable-next-line prefer-const
      let dateA = []
      let s = false
      if (date.includes('.')) { dateA = date.split('.') } else if (date.includes('/')) { dateA = date.split('/'); s = true }

      if (dateA[0].length === 1) {
        dateA[0] = '0' + dateA[0]
      }
      if (dateA[1].length === 1) {
        dateA[1] = '0' + dateA[1]
      }
      if (!s) {
        return dateA.join('.')
      } else {
        return dateA.join('/')
      }
    }

  }
}
