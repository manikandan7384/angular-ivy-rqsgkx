import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { UserNavbarComponent } from './navbar/navbar.component';
import { UserHomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule,
    MatToolbarModule,
    MatCardModule,
  ],
  declarations: [AppComponent, UserNavbarComponent, UserHomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
