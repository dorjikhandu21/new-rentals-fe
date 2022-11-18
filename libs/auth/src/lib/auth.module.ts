import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth/auth.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {RouterLinkWithHref} from "@angular/router";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSelectModule} from "@angular/material/select";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    imports: [CommonModule, MatCardModule, FlexModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, RouterLinkWithHref, MatTooltipModule, MatSelectModule, TranslateModule.forRoot(), ReactiveFormsModule, MatIconModule],
  declarations: [AuthComponent, LoginComponent, SignupComponent],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AuthModule,
      providers: []
    };
  }
}
