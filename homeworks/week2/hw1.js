function stars(n) {
  return Array(n).fill(0).map((a, index) => '*'.repeat(index + 1))
}

module.exports = stars;
