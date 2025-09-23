import { PersonInfoAdaptor } from './../../shared/models/person-info-adaptor';
import { Component, signal } from '@angular/core';
import { PersonInfo } from '../../shared/models/person-info';
import { Navbar } from "../../shared/components/navbar/navbar";
import { ActivatedRoute } from '@angular/router';
import { RouteData } from '../../shared/models/route.model';

@Component({
  selector: 'app-adaptor',
  imports: [Navbar],
  templateUrl: './adaptor.html',
  styleUrl: './adaptor.scss'
})
export class Adaptor {
  personInfo = signal<PersonInfo>({
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  })
  routeData: RouteData | null = null
  personInfoAdaptor = signal<PersonInfoAdaptor>({} as PersonInfoAdaptor);
  constructor(private readonly route: ActivatedRoute) {
    this.personInfoAdaptor.set({ ...this.personInfo(), fullName: `${this.personInfo().firstName} ${this.personInfo().lastName}` });
    this.routeData = this.route.snapshot.data as RouteData
  }

}
