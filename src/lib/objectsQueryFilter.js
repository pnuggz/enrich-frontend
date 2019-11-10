// const ObjectsQueryFilter = props => {
//   const q = props.query;
//   const objects = props.objects;
//   const key = props.key || "value";

//   if (q === "") {
//     return objects;
//   }

//   const escapeRegExp = s => {
//     return s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
//   };

//   const words = q
//     .split(/\s+/g)
//     .map(s => s.trim())
//     .filter(s => !!s);

//   const hasTrailingSpace = q.endsWith(" ");

//   const searchRegex = new RegExp(
//     words
//       .map((word, i) => {
//         if (i + 1 === words.length && !hasTrailingSpace) {
//           // The last word - ok with the word being "startswith"-like
//           return `(?=.*\\b${escapeRegExp(word)})`;
//         } else {
//           // Not the last word - expect the whole word exactly
//           return `(?=.*\\b${escapeRegExp(word)}\\b)`;
//         }
//       })
//       .join("") + ".+",
//     "gi"
//   );

//   return objects.filter(item => {
//     return searchRegex.test(item[key]);
//   });
// };

const ObjectsQueryFilter = props => {
  const q = props.query;
  const objects = props.objects;
  const key = props.key || "value";

  if (q === "") {
    return objects;
  }

  const words = q
    .split(/\s+/g)
    .map(s => s.trim())
    .filter(s => !!s);

  const queryResults = objects.reduce((results, obj) => {
    const string = obj[key].toLowerCase();

    const checker = words.reduce((resultsBool, word) => {
      let tester = false;
      if (string.indexOf(word.toLowerCase()) > -1) {
        tester = true;
      }
      return resultsBool && tester;
    }, true);

    if (checker) {
      results.push(obj);
    }
    return results;
  }, []);

  if (queryResults.length === 0) {
    return [
      {
        id: 0,
        [key]: "No item found."
      }
    ];
  }
  return queryResults;
};

export default ObjectsQueryFilter;
