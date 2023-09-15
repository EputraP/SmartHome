type autocompleteFormat = {
  label: string;
  value: string;
};
type brandDataObject = {
  brand_id: string;
  brand_name: string;
  brand_image: string;
};

const dataSorting = (sortingType: string, data: brandDataObject[]) => {
  if (sortingType == "Descending") {
    data.sort(function (a, b) {
      if (a.brand_name < b.brand_name) {
        return 1;
      }
      if (a.brand_name > b.brand_name) {
        return -1;
      }
      return 0;
    });
  } else if (sortingType == "Ascending") {
    data.sort(function (a, b) {
      if (a.brand_name < b.brand_name) {
        return -1;
      }
      if (a.brand_name > b.brand_name) {
        return 1;
      }
      return 0;
    });
  }
  return data;
};

const dataAutoComplete = (data: brandDataObject[]) => {
  let autocompleteData: autocompleteFormat[] = [];
  for (let i = 0; i < data.length; i++) {
    autocompleteData.push({
      label: data[i].brand_name,
      value: data[i].brand_name,
    });
  }
  return autocompleteData;
};

function paginate(arr: any, size: any) {
  return arr.reduce((acc: any, val: any, i: number) => {
    let idx = Math.floor(i / size);
    let page: number[] = acc[idx] || (acc[idx] = []);
    page.push(val);

    return acc;
  }, []);
}

export { dataSorting, dataAutoComplete, paginate };
