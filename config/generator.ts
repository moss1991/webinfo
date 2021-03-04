type ColumsItem = {
  title:string;
  key:string;
}

type GeneratorParam = {
  params : Array<string>[];
  item : Array<string>[];
  request_url : string;
  colums : Array<ColumsItem>[];
}

class Generator{
  private params : Array<string>[];
  private item : Array<string>[];
  private request_url : string;
  private colums : Array<ColumsItem>[];

  constructor(params:GeneratorParam){
    this.params = params.params
    this.item = params.item
    this.request_url = params.request_url
    this.colums = params.colums
    // { title:'测试',key:'test'}
  }


  tran_colums_item = ()=>{
    let _colums = this.colums;
    let _self = this;
    if(!_colums.length){
      _colums.forEach(element => {
        // _self.item.push(element.title)
      });
    }
  }

  get_ts_data = ()=>{

  }
}
