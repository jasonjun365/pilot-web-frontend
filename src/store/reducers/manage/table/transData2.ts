interface PropTypes {
  (data: any, initialData: any[]): any[]
}

const transData: PropTypes = (data, initialData) => {
  let result = initialData;
  
  if (data) {
    result = result.map((it: any) => {
      const extraData = data[it.sid]?.broadcast;
      
      return {
        ...it,
        ...extraData,
        disabledRemove: extraData?.isLive,
      };
    });
  }

  return result;
};

export default transData;