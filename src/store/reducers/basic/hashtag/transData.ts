interface PropTypes {
  (data: any, initialData: any[]): any[]
}

const transData: PropTypes = (data, initialData) => {
  let result = data?.data?.records || initialData;

  if (data?.data?.records) {
    result = result.map((it: string) => ({
      name: it,
    }));
  }

  return result;
};

export default transData;