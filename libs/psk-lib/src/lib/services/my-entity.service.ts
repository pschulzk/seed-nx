/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';

import { CreateMyEntityDto } from '../models/create-my-entity-dto';
import { UpdateMyEntityDto } from '../models/update-my-entity-dto';

@Injectable({ providedIn: 'root' })
export class MyEntityService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `myEntityControllerFindMany()` */
  static readonly MyEntityControllerFindManyPath = '/api/my-entity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `myEntityControllerFindMany()` instead.
   *
   * This method doesn't expect any request body.
   */
  myEntityControllerFindMany$Response(
    params: {
      crudQuery: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, MyEntityService.MyEntityControllerFindManyPath, 'get');
    if (params) {
      rb.path('crudQuery', params.crudQuery, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `myEntityControllerFindMany$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  myEntityControllerFindMany(
    params: {
      crudQuery: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.myEntityControllerFindMany$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `myEntityControllerCreate()` */
  static readonly MyEntityControllerCreatePath = '/api/my-entity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `myEntityControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  myEntityControllerCreate$Response(
    params: {
      crudQuery: string;
      body: CreateMyEntityDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, MyEntityService.MyEntityControllerCreatePath, 'post');
    if (params) {
      rb.path('crudQuery', params.crudQuery, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `myEntityControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  myEntityControllerCreate(
    params: {
      crudQuery: string;
      body: CreateMyEntityDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.myEntityControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `myEntityControllerFindOne()` */
  static readonly MyEntityControllerFindOnePath = '/api/my-entity/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `myEntityControllerFindOne()` instead.
   *
   * This method doesn't expect any request body.
   */
  myEntityControllerFindOne$Response(
    params: {
      id: string;
      crudQuery: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, MyEntityService.MyEntityControllerFindOnePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('crudQuery', params.crudQuery, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `myEntityControllerFindOne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  myEntityControllerFindOne(
    params: {
      id: string;
      crudQuery: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.myEntityControllerFindOne$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `myEntityControllerRemove()` */
  static readonly MyEntityControllerRemovePath = '/api/my-entity/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `myEntityControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  myEntityControllerRemove$Response(
    params: {
      id: string;
      crudQuery: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, MyEntityService.MyEntityControllerRemovePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('crudQuery', params.crudQuery, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `myEntityControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  myEntityControllerRemove(
    params: {
      id: string;
      crudQuery: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.myEntityControllerRemove$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `myEntityControllerUpdate()` */
  static readonly MyEntityControllerUpdatePath = '/api/my-entity/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `myEntityControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  myEntityControllerUpdate$Response(
    params: {
      id: string;
      crudQuery: string;
      body: UpdateMyEntityDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, MyEntityService.MyEntityControllerUpdatePath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('crudQuery', params.crudQuery, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `myEntityControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  myEntityControllerUpdate(
    params: {
      id: string;
      crudQuery: string;
      body: UpdateMyEntityDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.myEntityControllerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
