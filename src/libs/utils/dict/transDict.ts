interface ValuePropTypes {
  (dict: any, key: any, name: any): string
}

const getLabel: ValuePropTypes = (dict, key, name) => {
  const data = dict[key];
  if (data) {
    const result = data.find((it: any) => it.value === name);
    if (result) {
      return result.label;
    }
    return name;
  } else {
    return name;
  }
};

interface ArrPropTypes {
  (dict: any, key: any): any
}

const getArr: ArrPropTypes = (dict, key) => {
  const data = dict[key];
  if (data) {
    return data;
  } else {
    return [];
  }
};

const getAbleArr: ArrPropTypes = (dict, key) => {
  const data = dict[key];
  if (data) {
    return data.filter((it: any) => it.selectable);
  } else {
    return [];
  }
};

export default {
  getLabel,
  getArr,
  getAbleArr,
};