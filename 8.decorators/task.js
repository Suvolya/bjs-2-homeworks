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
  
    let timeoutId = false;
    let count = 0;
    let allCount = 0;
  
    function wrapper(...args) {
  
      if (!wrapper.count) {
        wrapper.count = 0;
      }
  
      if (!wrapper.allCount) {
        wrapper.allCount = 0;
      }
  
      wrapper.count++;
      wrapper.allCount++;
  
      if (timeoutId) return;
      func.apply(this, args);
  
      timeoutId = true;
  
    setTimeout(() => timeoutId = false, delay);
        
    }; 
    
    wrapper.count = count;
    wrapper.allCount = allCount;
  
    return wrapper;
  }
  
