const showingListOfSth = (lang: string[]) => {
  let last = lang.pop();

  return `${lang.join(', ')} and ${last}`;
};

export default showingListOfSth;
