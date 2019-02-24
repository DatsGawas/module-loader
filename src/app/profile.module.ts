/**
 * Created by dattaram on 22/2/19.
 */
import {NgModule} from '@angular/core';

import {CommonModule} from "@angular/common";
import {ProfileComponent} from "./profile.component";

@NgModule({
  imports: [CommonModule], exports: [ProfileComponent], declarations: [ProfileComponent], providers: [],
})
export class ProfileModule {
}
