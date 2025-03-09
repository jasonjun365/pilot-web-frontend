interface PropTypes {
  (data: any, initialData: any[]): any[]
}

const transData: PropTypes = (data, initialData) => {
  let result = data?.data?.list || initialData;

  if (data?.data?.list) {
    result = result.map((it: string) => ({
      name: it,
    }));
  }

  return result;
};

export default transData;