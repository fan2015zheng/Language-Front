const DatabasePageMap = {
  "1-1": [ 1, 2, 3, 4, 5, 6, 8, 9,10,11,12,13],
  "1-2": [14,15,16,17,18,19,20,21,22,23,24,25,26],
  "1-3": [27,28,29,30,31,32,33,34,35,36,37,38],
  "1-4": [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13],
  "1-5": [14,15,16,17,18,19,20,21,22,23,24,25,26],
  "1-6": [27,28,29,30,31,32,33,34,35,36,37,38,39]
}
const FrenchPageMap = {
  "1-1": [ 1, 2, 3, 4, 5, 6, 8, 9,10,11,12,13],
  "1-2": [14,15,16,17,18,19,20,21,22,23,24,25,26],
  "1-3": [27,28,29,30,31,32,33,34,35,36,37,38],
  "1-4": [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13],
  "1-5": [14,15,16,17,18,19,20,21,22,23,24,25,26],
  "1-6": [27,28,29,30,31,32,33,34,35,36,37,38,39]
}
const GermanPageMap = {
  "1-1": [ 1, 2, 3, 4, 5, 6, 8, 9,10,11,12,13],
  "1-2": [14,15,16,17,18,19,20,21,22,23,24,25,26],
  "1-3": [27,28,29,30,31,32,33,34,35,36,37,38],
  "1-4": [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13],
  "1-5": [14,15,16,17,18,19,20,21,22,23,24,25,26],
  "1-6": [27,28,29,30,31,32,33,34,35,36,37,38,39]
}

export default class Util {
  static getDatabasePage = getDatabasePage
  static getLanguagePage = getLanguagePage
  static getPageCount = getPageCount
}

function getPageCount(language, chapter, lesson) {
  const map = pageMap(language)
  const array = map[chapter+"-"+lesson]
  if (!array) {
    return 0
  }
  return array.length
}

function pageMap(language) {
  if (language === "French") return FrenchPageMap
  if (language === "German") return GermanPageMap
  return DatabasePageMap
}

function getDatabasePage(language, chapter, lesson, page) {
  const map = pageMap(language)
  const array = map[chapter+"-"+lesson]
  if (array && array.length >= page) {
    return array[page-1]
  }
  return ""
}

function getLanguagePage(language, chapter, lesson, dbPage) {
  const map = pageMap(language)
  const array = map[chapter+"-"+lesson] 
  if (array && array.length > 0) {
    for(let i=0; i<array.length; i++) {
      if (array[i] === dbPage) {
        return i+1
      }
    }
  }
  return ""
}

