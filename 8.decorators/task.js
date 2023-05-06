//Задача № 1

function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(JSON.stringify(args));
    let objectInCache = cache.find((item) => item.hash === hash);

    if (objectInCache) {
     console.log("Из кэша: " + objectInCache.result);
      return "Из кэша: " + objectInCache.result;
    }
    let result = func(...args);
    
    cache.push({hash, result});

    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId;
    let hasCalled = false;
  
    function doIt(args) {
      func.apply(this, args);
      hasCalled = true;
      wrapper.count++;
    }
  
    function wrapper(...args) {
      if (timeoutId) clearTimeout(timeoutId);
      if (!wrapper.count) wrapper.count = 0;
      if (!wrapper.allCount) wrapper.allCount = 0;
  
      if (!hasCalled) {
        doIt(args);
      } else {
        wrapper.allCount++;
        timeoutId = setTimeout(() => doIt(args), delay);
      }
    }
    return wrapper;
  }
  