const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre == "History")
  userBooks = books.filter( (bk) => { return bk.publish >= 1995 && bk.genre === "History"})
  console.log(userBooks);

  // using maps
  const newNum3 = books.map( (bk) => bk.genre == "History")
  console.log(newNum3);

  // using forEach
  const newNum5 = []
  const newNum4 = books.forEach( (bk) => {
    if(bk.genre == "History"){
        newNum5.push(bk)
    }
  })
  console.log(newNum5);

  // Filter value return karega based on the given condition
  // Map boolean return karega for each item in array based on the given condition

  // =-=-=-=-=-=-=-=-=-=-= Maps =-=-=-=-=-=-=-=-=-=-= 
  const nums1 = [1,2,3,4,5,6,7,8,9,10]
  const newNums1 = nums1.map( (num) => num + 10)
  console.log(newNums1);


  // =-=-=-=-=-=-=-=-=-=-= ForEach =-=-=-=-=-=-=-=-=-=-= 
  const myNums = []
  const nums2 = [1,2,3,4,5,6,7,8,9,10]
  nums2.forEach( (num) => {
    num = num + 10
    myNums.push(num)
  })
  console.log(myNums);


  // =-=-=-=-=-=-=-=-=-=-= Channing =-=-=-=-=-=-=-=-=-=-= 

const nums3 = [1,2,3,4,5,6,7,8,9,10]
const newNums = nums3.map( (num) => num * 10).map( (num) => num + 1)  
console.log(newNums);   // => [11, 21, 31, 41,  51,61, 71, 81, 91, 101]
  
const nums4 = [1,2,3,4,5,6,7,8,9,10]
const newNums2 = nums4.map( (num) => num * 10).map( (num) => num + 1).filter( (num) => num >= 40)
console.log(newNums2);   // => [11, 21, 31, 41,  51,61, 71, 81, 91, 101]