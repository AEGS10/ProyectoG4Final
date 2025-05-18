import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class VarPublicService {
    public logeado$ = new BehaviorSubject<boolean>(false);

    constructor() {}

}