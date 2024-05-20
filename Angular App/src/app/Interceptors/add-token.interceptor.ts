import { HttpInterceptorFn } from '@angular/common/http';

export const addTokenInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem("token")
  if(token){
    let reqClone = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
    return next(reqClone);
  }
  return next(req);
};
