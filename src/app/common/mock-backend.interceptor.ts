import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize, catchError } from 'rxjs/operators';
import { Profile } from './models/profile.model';
import { Alert } from './models/alert.model';

// reviver function for JSON parse so dates are parsed correctly
function dateTimeReviver(key: string, value: any) {
  // if value matches a ISO date format
  if(typeof value === 'string' && value.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/)) {
    return new Date(value);
  }
  else return value;
}

const markReadRegex = /\/alerts\/([0-9]+)\/read/;

// array in local storage for assets
let profile: Profile = {
  Name: "Ryan Tate"
};

let alerts: Alert[] = [
  {
    Id: 1,
    IsRead: false,
    Message: "You have new documents to review!"
  }
]

// This is a http intercepter that fakes an Assets RESTful API. It intercepts http requests 
// and responds with http responses with asset data.
// It fakes a data store by storing assets as a JSON string in browser local storage.
// If you run into any issues with this interceptor, please contact e.baker@cgi.com.
@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const { url, method, headers, body, params } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());
            //.pipe(catchError(handleError)); // add error handler

        function handleRoute() {
            try {
              switch (true) {
                case url.endsWith('/profile') && method === 'GET':
                    return getProfile();
                case url.endsWith('/profile') && method === 'PUT':
                    return updateProfile();
                case url.endsWith('/alerts') && method === 'GET':
                    return getAlerts();
                case url.match(markReadRegex) && method === 'POST':
                    return markAlertRead();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
              }    
            }
            catch (e: any) {
              return error(e.toString())
            }
        }

        // route functions
        function getProfile() {
          return ok({ ...profile });
        }

        function updateProfile() {
          profile = parseBody();
          return ok({ ...profile });
        }

        function getAlerts() {
          return ok(alerts.map(x => ({ ...x })));
        }

        function markAlertRead() {
          const match = url.match(markReadRegex);
          const id = match === null ? 0 : parseInt(match[1]);
          alerts = alerts.map(alert => alert.Id !== id ? alert : {
            ...alert,
            IsRead: true
          });
          return ok();
        }

        // function updateAsset(assetDto : any) {
        //    let asset = assets.find(x => x.assetTagId == idFromUrl());
        //    if(asset == undefined){
        //      return addAsset();
        //    }
        //    //asset.assetType = newAsset.assetType || null; // training project specifies this cannot be changed once set
        //    asset.description = assetDto.description || null;
        //    asset.assignedTo = assetDto.assignedTo || null;

        //    updateAssetInLocalStorage(asset);
        //    return ok(asset);
        // }

        // function retireAsset(retire : boolean) {
        //   let asset = assets.find(x => x.assetTagId == idFromUrl());
        //   if(asset == undefined){
        //     return notFound(`Asset does not exist!`);
        //   }
        //   asset.retired = retire;
        //   asset.dateRetired = new Date();
        //   updateAssetInLocalStorage(asset);
        //   return noContent();
        // }

        // function updateAssetInLocalStorage(asset: Asset) {
        //   let index = assets.findIndex(x => x.assetTagId == idFromUrl());
        //   assets[index] = JSON.parse(JSON.stringify(asset), dateTimeReviver); // stringify and parse for consistant JSON date format
        //   localStorage.setItem('assets', JSON.stringify(assets));
        // }

        // function getErrors() {
        //   return ok(errors);
        // }

        // function logError(message: string) {
        //   let error = new Error();
        //   error.message = message;
        //   error.date = new Date();

        //   errors.push(error);
        //   localStorage.setItem('errors', JSON.stringify(errors));
        //   return ok();
        // }

        // helper functions
        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function noContent() {
          return of(new HttpResponse({ status: 204 }));
        }

        function unauthorized() {
          return throwError(new HttpErrorResponse({ status: 401, url: url }));
        }

        function notFound(message: string) {
            return throwError(new HttpErrorResponse({ status: 404, statusText: message, url: url }));
        }

        function error(message: string) {
            return throwError(new HttpErrorResponse({ status: 500, statusText: message, url: url }));
        }

        // helper function that parses body in case it came over as a JSON string
        // assuming it is a proper JSON string for now, could add error handling later
        function parseBody()
        { 
          return typeof(body) == "string" ? JSON.parse(body, dateTimeReviver) : body; 
        }
    }
}

function handleError(error: HttpErrorResponse) {
  let errorMsg = '';
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    errorMsg = `An error occurred: ${error.error.message}`;
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    errorMsg = `Error Code: ${error.status}\nMessage: ${error.error.message}`;
  }

  // return an observable with a user-facing error message
  return throwError(errorMsg);
};

export const mockBackendProvider = {
    // use Mock backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: MockBackendInterceptor,
    multi: true
};