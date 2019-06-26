const NameDataTrans = (arr) => {
  let name: any[] = [];
  let data: any[] = [];
  if (!arr.length) return {
    name,
    data
  }
  arr.forEach((item: any) => {
    name.push(item.name);
    data.push(item.Data);
  });
  return {
    name,
    data
  }
}

const TransValueData = (arr): any[] => {
  // let name = [];
  // let data = [];
  let newarr: any[] = [];
  if (!arr.length) return newarr;
  arr.forEach(item => {
    newarr.push({
      name: item.name,
      value: item.Data
    })
  });
  return newarr
}
const trans2dArr = (arr): any[] => {
  let newarr: any = [];
  arr.forEach(item => {
    newarr.push(...item)
  })
  return newarr;
}

export default {
  NameDataTrans,
  TransValueData,
  trans2dArr
}
