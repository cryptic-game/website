export default {
  methods: {
    getDateWithLZero (date) {
      // eslint-disable-next-line prefer-const
      let dateA = date.split('.')
      if (dateA[0].length === 1) {
        dateA[0] = '0' + dateA[0]
      }
      if (dateA[1].length === 1) {
        dateA[1] = '0' + dateA[1]
      }
      return dateA.join('.')
    }

  }
}
