const DatabasePageMap = {
  "1-1": [1,2,3,4,5,6,7,8,9,10],
  "1-2": [1,2,3,4,5,6,7,8,9,10]
}

const FrenchPageMap = {
  "1-1": [1,2,3,4,5,6,7,8,9,10],
  "1-2": [1,2,3,4,5,6,7,8,9,10]
}
const GermanPageMap = {
  "1-1": [1,2,3,4,5,6,7,8,9,10]
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

