function myEach ( collection, callback )
{
    let newCollection = [];
    if ( !Array.isArray( collection ) )
    {
        newCollection = Object.values(collection)
    }
    else
    {
        newCollection = collection
    }
    for ( let i of newCollection )
    {
        callback(i)
    }
    return collection
}
function myMap ( collection, callback )
{
  let result = [];
  let newCollection;
  if (!Array.isArray(collection)) {
    newCollection = Object.values(collection);
  } else {
    newCollection = collection;
  }
  for (let i = 0; i < newCollection.length; i++) {
    result.push(callback(newCollection[i]));
  }
  return result;
}

function myReduce ( collection, callback, acc )
{
  let newCollection;
  if (!Array.isArray(collection)) {
    newCollection = Object.values(collection);
  } else {
    newCollection = collection;
  }
  if (acc !== undefined) {
    for (let i = 0; i < newCollection.length; i++) {
      acc = callback(acc, newCollection[i]);
    }
  } else {
    acc = newCollection[0];
    for (let i = 1; i < newCollection.length; i++) {
      acc = callback(acc, newCollection[i]);
    }
  }
  return acc;
}

function myFind ( collection, predicate )
{
  let find;
  let newCollection;
  if (!Array.isArray(collection)) {
    newCollection = Object.values(collection);
  } else {
    newCollection = collection;
  }
  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) {
      find = newCollection[i];
      return find;
    }
  }
  return find;
}

function myFilter ( collection, predicate )
{
  let find = [];
  let newCollection;
  if (!Array.isArray(collection)) {
    newCollection = Object.values(collection);
  } else {
    newCollection = collection;
  }
  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) {
      find.push(newCollection[i]);
    }
  }
  return find;
}

function mySize ( collection )
{
  let newCollection;
  if (!Array.isArray(collection)) {
    newCollection = Object.values(collection);
  } else {
    newCollection = collection;
  }
  return newCollection.length;
}

function myFirst ( array, integer )
{
  if (typeof integer === "number") {
      return array.slice(0,integer);
  }
  else
  {
    return array[0];
  }
};

function myLast ( array, integer )
{
  if (typeof integer === "number") {
    return array.slice(-integer);
  }
  else
  {
    return array[mySize(array)-1];
  }
}

function myKeys ( object )
{
  let result = [];
  for (let key in object) {
    result.push(key);
  }
  return result;
}

function myValues ( object )
{
  let result = [];
  for (let key in object) {
    result.push(object[key]);
  }
  return result;
}