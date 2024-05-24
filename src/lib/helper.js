export function browserCanPlayH265(vidEl) {
  return vidEl.canPlayType('video/mp4; codecs=hvc1') === "probably";
}

export function importAll(r) {
  let files = {};
  r.keys().map(item => { files[item.replace('./', '')] = r(item); });
  return files;
}

export function importInfiniteCarouselMedia() {

  let mediaFiles = {};

  mediaFiles = import.meta.glob('./img/infinite-carousel/*.(mp4|webm|webp)', {query: "?url", eager: true});
  
  let fileArr = [];

  Object.entries(mediaFiles).forEach(element => {
    fileArr.push(element[1]);
  });

  fileArr.sort(function(a, b) {
    // Extract the numbers from file paths using regular expressions
    let numA, numB;

    const regex = /(\d+)\.\w+$/;

    try {
      numA = parseInt(a.default.match(regex)[1]);
      numB = parseInt(b.default.match(regex)[1]);
    } catch (error) {
    } 

    return numA - numB;
  });
  
  return fileArr;
}

export function removeClass(query, className) {
  document.querySelectorAll(query).forEach((element) => {
    if (element.classList.contains(className))
      element.classList.remove(className);
  });
}

export function addClass(query, className) {
  document.querySelectorAll(query).forEach((element) => {
    if (!element.classList.contains(className))
      element.classList.add(className);
  });
}

export function hasClass(query, className) {
  return Array.from(document.querySelectorAll(query)).some(({classList}) => classList.contains(className));
}

export function elHasClass(el, className) {
  return el.classList.contains(className);
}

export const elementIsInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}

export function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}