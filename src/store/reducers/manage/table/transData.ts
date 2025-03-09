interface PropTypes {
  (data: any, initialData: any[]): any[]
}

const transData: PropTypes = (data, initialData) => {
  let result = data || initialData;

  result = result.filter((it: any) => it.sid).map((it: any) => ({
    ...it,
    disabledRemove: true
  }));

  return result;
};

export default transData;