function objFunc(initData) {
  let data = initData;
  return {
    getData: () => {
      return data;
    },
    setData: (_data) => {
      data = _data;
    },
  };
}

class objClass {
  constructor(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  setData(_data) {
    this.data = _data;
  }
}

const obj1 = objFunc("John Doe");
console.log(obj1.getData());
obj1.setData("test");
console.log(obj1.getData());

const obj2 = new objClass("John Doe2");
console.log(obj2.getData());
obj2.setData("test");
console.log(obj2.getData());
