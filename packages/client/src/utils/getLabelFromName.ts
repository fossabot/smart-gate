const getLabelFromName = (source: string): string => {
  return source
    .split(/(?=[A-Z])/)
    .map((str, index) => {
      if (index === 0) {
        return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
      }
      return `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
    })
    .join(' ');
};

export default getLabelFromName;
