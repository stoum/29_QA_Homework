function evklidAlgorithm(a, b) {
    while (a != b) {
      if (a > b) {
        a = a - b
      }
      else if (a < b) {
        b = b - a
      }
    }
    console.log(a)
}
evklidAlgorithm(13, 183)
