export interface ChartsData {
  name?: string;
  value?: number;
  EmployeeCode?: string;
  EmployeeName?: string;
  ORGName?: string;
}
export interface ILogin {
  code?: string
  data?: any
  size?: number
}
export interface SLogin {
  result?: any;
  content?: Array<SloginItem>
  msg?: any;
}

interface SloginItem {
  action?: string | number;
  name?: string;
  time?: string | number
}