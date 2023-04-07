function compareArrays(arr1, arr2) {
    if (arr1.length == arr2.length && arr1.every((n, i) => arr2[i] == n)) {
        return true;
      } else {
        return false;
      }
    }

function getUsersNamesInAgeRange(users, gender) {
  const filteredUsers = users.filter(user => user.gender === gender);

  if (filteredUsers.length === 0) {
    return 0;
  }

  const ages = filteredUsers.map(user => user.age);
  const totalAge = ages.reduce((acc, age) => acc + age, 0);

  
  const average = totalAge/filteredUsers.length;
  return average;
}