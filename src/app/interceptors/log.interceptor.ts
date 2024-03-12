import { HttpInterceptorFn } from '@angular/common/http';

export const logInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('request has been sent to: ' + req.url);
  return next(req);
};
