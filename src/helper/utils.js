export const historyFunction = {
  addTagToHistory: (tagName) => {
    let historyTagsArray = JSON.parse(localStorage.getItem('history'));
    let index = -1;
    let date = new Date();
    let time =
      date.getDate() +
      '/' +
      date.getMonth() +
      1 +
      '/' +
      date.getFullYear() +
      ' ' +
      date.getHours() +
      ' ' +
      ' ' +
      date.getMinutes();
    if (historyTagsArray === null) {
      historyTagsArray = [];
    }

    historyTagsArray.map((obj, i) => {
      if (obj.tag === tagName) {
        obj.hitCount++;
        obj.time = time;
        index = i;
      }
    });
    if (index === -1) {
      let obj = {
        tag: tagName,
        hitCount: 1,
        time: time,
      };
      historyTagsArray = [obj, ...historyTagsArray];
    }
    localStorage.setItem('history', JSON.stringify(historyTagsArray));
  },
  deleteAll: () => {
    if (localStorage.getItem('history') !== null) {
      localStorage.removeItem('history');
    }
  },
  deleteTag: (tagName) => {
    let historyTagsArray = JSON.parse(localStorage.getItem('history'));
    if (historyTagsArray === null) {
      return;
    }
    let newHistoryTags = historyTagsArray.filter((obj) => {
      if (obj.tag === tagName) {
        return false;
      }
      return true;
    });
    localStorage.setItem('history', JSON.stringify(newHistoryTags));
  },
};
