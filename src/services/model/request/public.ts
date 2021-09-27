// {
// "code": 400,
// "data": "jwt令牌错误，令牌不能为空",
// "msg": "JWT authentication error, please login again"
// }

export type HttpResponse = {
  code: number;
  data: any;
  msg: string;
}
