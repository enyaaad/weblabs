import {Component, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThirdComponent } from './trird/third.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';
import { SeventhComponent } from './seventh/seventh.component';
import { EighthComponent } from './eighth/eighth.component';
import { NinethComponent } from './nineth/nineth.component';
import { TenthComponent } from './tenth/tenth.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ThirdComponent,
    SecondComponent,
    FirstComponent,
    FourthComponent,
    FifthComponent,
    SixthComponent,
    SeventhComponent,
    EighthComponent,
    NinethComponent,
    TenthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}



