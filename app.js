//Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    //designate the first element in array to variable
    let smallest = args[0];
    //run a for loop checking to see if smallest is smaller than next variable in array
    for (let i = 1; i < args.length; i++){
      if (args[i] < smallest) {
        smallest = args[i];
      }
    }
  //return the smallest variable
  return smallest;
  }
}