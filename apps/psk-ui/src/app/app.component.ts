import { Component } from '@angular/core'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { MyEntityService } from '@psk/psk-lib'
import { BehaviorSubject, switchMap } from 'rxjs'

@UntilDestroy()
@Component({
  selector: 'psk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myData = {}
  private _reload$ = new BehaviorSubject<void>(undefined)

  constructor(
    private myentities: MyEntityService,
  ) {}

  ngOnInit(): void {
    this._reload$.pipe(
      untilDestroyed(this),
      switchMap(() => this.myentities.myEntityControllerFindMany({ crudQuery: '{}' }))
    ).subscribe((data) => {
      this.myData = JSON.parse(data as unknown as string)
    })
  }

  createMyEntity(): void {
    this.myentities.myEntityControllerCreate({ crudQuery: '{}', body: { name: 'test' } }).pipe(untilDestroyed(this)).subscribe((data) => {
      this.reloadMyEntities()
    })
  }

  reloadMyEntities(): void {
    this._reload$.next()
  }
}
