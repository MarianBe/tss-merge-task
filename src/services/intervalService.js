/* Service to manage the intervals */

// Function to merge overlapping intervals
export function MERGE(intervals) {
  console.time('Timer')
  // Check if given intervals are set and filled
  if (!intervals || intervals.length <= 0)
    return;
  
  // Sort intervals on first position ascending
  intervals.sort((first, second) => {
    return first[0] - second[0]
  })

  // Create result array
  let result = []

  // Push first interval to result array
  result.push(intervals[0])

  // Prop to save last interval
  let lastInterval = null

  /*
    Skip the first element (already pushed to result)
    and merge to result if needed
   */
  for(let i = 1; i < intervals.length; i++) {
    // Get last interval from result array
    lastInterval = result[result.length - 1];

    /* Check if first position of current interval 
      is bigger or equal than/to the last position of the previous interval

      What about same values? intervals[i][0] >= lastInterval[1]
     */

    if (intervals[i][0] > lastInterval[1]) {
      result.push(intervals[i])
    } else if (intervals[i][1] > lastInterval[1]) {
      /* Else check if the second position of current interval is bigger
        than the second position of the previous interval and
        update the second position of the previous interval
      */
      lastInterval[1] = intervals[i][1]
    }
  }
  console.timeEnd('Timer')

  return result
}
