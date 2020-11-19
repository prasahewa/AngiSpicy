import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from,Observable } from 'rxjs';
import { Spicy } from './spicy.modle';

@Injectable({
  providedIn: 'root'
})
export class DetailFireStoreService {

  constructor(private firestore: AngularFirestore) { }

  getAllSpicy():Observable<Spicy[]> {
    return this.firestore.collection<Spicy>('spicys').valueChanges();
  }
  
   addSpicy(spicy: Spicy):Observable<void> {
     const id=this.firestore.createId();
     const promise=this.firestore.collection<Spicy>('spicys').doc(id).set(spicy);
     return from(promise);
  }

  updateSpiciy(spicy: Spicy):Observable<void> {
    const id=spicy.id;
     const promise=this.firestore.collection<Spicy>('spicys').doc(id).update(spicy);
     return from(promise);
  }
  

  delSpice(spicy: Spicy):Observable<void> {
    const id=spicy.id;
     const promise=this.firestore.collection<Spicy>('spicys').doc(id).delete();
     return from(promise);
  }
}
