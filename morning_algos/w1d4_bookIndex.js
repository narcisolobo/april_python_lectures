// Book Index
// Martin is writing his opus: a book of algorithm challenges, set as lyrics to a suite of a cappella fugues. Some of ‘those fugueing challenges’ are less popular than others, so he needs an index.

// Given a sorted array of pages where a term appears, produce an index string. Consecutive pages should form ranges separated by a hyphen. For [1,13,14,15,37,38,70], return string "1, 13-15, 37-38, 70". Take care to get all the commas and spaces correct: Martin is palpably particular (practically persnickety!) about patchy punctuation.

// Create a function named bookIndex that takes a sorted array as input.
function bookIndex(pageNums) {
    let formattedPageNums = "";
    let pageRangeStartIdx = 0;

    for (let i = 0; i < pageNums.length; i++) {
        let currentPageNum = pageNums[i];
        let nextPageNum = pageNums[i + 1];
        let pageRangeStopIdx = i;

        // page range is not sequential
        if (currentPageNum + 1 !== nextPageNum) {
            // single page, no range
            if (pageRangeStartIdx === pageRangeStopIdx) {
                formattedPageNums += currentPageNum;
            }
            // we have a page range
            else {
                formattedPageNums += `${pageNums[pageRangeStartIdx]}-${pageNums[pageRangeStopIdx]}`;
            }
            if (i !== pageNums.length - 1) {
                formattedPageNums += ", ";
            }

            // Since we've added a page range
            // need to get start idx set up for next page range
            pageRangeStartIdx = i + 1;
        }
    }
    return formattedPageNums;
}

console.log(bookIndex([1,13,14,15,37,38,70]))