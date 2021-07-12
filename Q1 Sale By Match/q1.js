function sockMerchant(socks) {
  const sockSorting = {};
  let pairCount = 0;

  // Go through each item
  socks.forEach((sock) => {
    // Sort each sock
    if (!sockSorting[sock]) {
      sockSorting[sock] = 1;
    } else {
      sockSorting[sock] += 1;
    }

    // As each pair is found update count
    // Note: This can be combined into the forloop above.
    //   This is here for readability purposes.
    if (sockSorting[sock] === 2) {
      sockSorting[sock] = 0;
      pairCount++;
    }
  });

  // Return sock count
  return pairCount;
}

module.exports = sockMerchant;
