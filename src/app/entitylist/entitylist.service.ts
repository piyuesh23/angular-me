import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Entity } from './entity';

@Injectable()
export class EntitylistService{
  private baseUrl: string = 'http://training.qed42.net/api';

  constructor(private http : Http){
  }

  getAll(currentUrl): Observable<Entity[]>{
    let slug = '';
    switch (currentUrl) {
      case '/posts':
        slug = 'node/activities';
        break;
      case '/contributions':
        slug = 'node/activities';
        break;
    }

    let entity$ = this.http
      .get(`${this.baseUrl}/` + slug + `/?_format=api_json`, {headers: this.getHeaders()})
      .map(mapEntities)
      .catch(handleError);
      return entity$;
  }

  getAboutMe(): Observable<Entity[]>{
    let slug = '';

    let entity$ = this.http
      .get(`${this.baseUrl}/node/article/cae4051b-48d6-44ab-89bc-c0e8e90702f6/?fields[node--article]=title,body&_format=api_json`, {headers: this.getHeaders()})
      .map(mapAboutMe)
      .catch(handleError);

      return entity$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapAboutMe(response:Response): Entity {
    let r = response.json().data;

    let entity = <Entity>({
      id: r.id,
      title: r.attributes.title,
      created: r.attributes.created,
      type: r.type,
      body: r.attributes.body.value
    });
    console.log(entity);
    return entity;
  }

function mapEntities(response:Response): Entity[]{
   // uncomment to simulate error:
   // throw new Error('ups! Force choke!');

   // The response of the API has a results
   // property with the actual results
   return response.json().data.map(toEntity)
}

function toEntity(r:any): Entity{
  let entity = <Entity>({
    id: r.id,
    title: r.attributes.title,
    created: r.attributes.created,
    type: r.type,
    body: r.attributes.body.value
  });

  return entity;
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
