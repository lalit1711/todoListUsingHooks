import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map  } from 'rxjs/operators';

export class ApiService  {
  getDataFromApi = (url: any, _confId: number): Observable<any> => {
    return ajax(url).pipe(
      map(res => {
        return _confId ? res.response.free.filter(
          (_da:any) => _da.conference_id == _confId
        ) : res.response.free;
      })
    )
  }
};

export default ApiService;