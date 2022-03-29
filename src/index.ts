import { from, Observable, of, Subject, throwError } from 'rxjs';
import {
  catchError,
  finalize,
  mergeMap,
  pluck,
  share,
  shareReplay,
  tap,
  throwIfEmpty,
} from 'rxjs/operators';

type UserLoggedPayload = {
  name: string;
};

const createService = (name: string) => {
  return new (class {
    name: string = name;

    subscribe<T>(subj: Observable<T>) {
      subj.subscribe((val) => {
        console.log(`${name}: user ${val} logged`);
      });
    }
  })();
};

const userLoggedSubj = new Subject<UserLoggedPayload>();
const userLogged = userLoggedSubj.pipe(pluck('name'), share());

const initialSubscriber = userLogged.subscribe(console.log);

const service1 = createService('UserService');
service1.subscribe(userLogged);

userLoggedSubj.next({ name: 'Danila' });
