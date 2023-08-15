export const checkArraySanity = (array) => {
  if (!array) return false;
  if (!Array.isArray(array)) return false;
  if (!array.length) return false;
  return true;
};

export const checkObjectSanity = (object) => {
  if (object === null || typeof object === "undefined") return false;
  if (typeof object !== "object") return false;
  if (Array.isArray(object)) return false;
  if (Object.keys(object).length === 0) return false;
  return true;
};

let timeout;

export const debounce = (callback, delay = 1000) => {
  clearTimeout(timeout);
  
  timeout = setTimeout(() => {
    callback();
  }, delay);
};

 //get local starage
export const getLocalData = (key) => {
    let user = localStorage.getItem(key);
    if(user){
      return JSON.parse(localStorage.getItem(key));
    }
      return [];
}

//set local storage
export const setLocalData = (key, value) => {
    let isPresent = localStorage.getItem(key);
    if(!isPresent){
     localStorage.setItem(key, JSON.stringify([]));
    }
    let data = JSON.parse(localStorage.getItem(key));
    data.push(value);
    localStorage.setItem(key, JSON.stringify(data));
}

export const removeLocalData = (key) => {
    localStorage.removeItem(key);
}

export const  openInNewTab = (url) => {
  var win = window.open(url, '_blank');
  win.focus();
}
