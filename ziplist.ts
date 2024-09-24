function zipList(list1: (string | number)[], list2: (string | number)[]): (string | number)[] {
  const result: (string | number)[] = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));

type ZipListElement = string | number | boolean;

function zipListTheFunctionalWay(list1: ZipListElement[], list2: ZipListElement[]): ZipListElement[] {
  const result: ZipListElement[] = [];
  list1.forEach((item, index) => {
    result.push(item);
    result.push(list2[index]);
  });
  return result;
}

console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
