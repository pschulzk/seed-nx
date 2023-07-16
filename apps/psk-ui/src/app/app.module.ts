import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ApiModule } from '@psk/psk-lib'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Prisma API module
    ApiModule.forRoot({ rootUrl: 'http://localhost:4200' }),
    // Material modules
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  // For this app to be used for Angular Module Federation, the main app component should not be bootstrapped!
  bootstrap: [AppComponent],
})
export class AppModule { }
