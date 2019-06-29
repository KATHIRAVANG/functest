const inputdata = require("./input.json");

describe("parsejson", () => {
  it("parsetest", () => {
    expect("123").toEqual(inputdata[0].ts);
  });

  it("reduce", () => {
    let groupbyproto = inputdata.reduce(function(r, a) {
      r[a.proto] = r[a.proto] || [];
      // console.log(a.proto);
      r[a.proto].push(a);
      return r;
    }, Object.create({}));

    console.log(groupbyproto);

    Object.entries(groupbyproto).forEach(([key, value]) => {
      // console.log(`${key}: ${value}`);
      let arr = [];
      let data = [];

      //  console.log(`${key}: ${value}`);
      let sum = value.reduce(function(r, a) {
        //   console.log(a.metric);
        let eachData = [];
        eachData.push(a.ts);
        eachData.push(a.metric || 0);
        data.push(eachData);
        return r + a.metric || 0; // if metric not found set to zero
      }, 0);
      arr.push({ name: `${key} - ${sum}`, data: data });
      console.log(arr);
    });
  });
});
