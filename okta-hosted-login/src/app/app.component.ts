/*!
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { Router } from "@angular/router";
import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isAuthenticated: boolean;

  user: any;


  constructor(public oktaAuth: OktaAuthService, private router: Router) {
    this.oktaAuth.$authenticationState.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated
      this.oktaAuth.getUser().then(user => this.user = user);
    });
  }



  async ngOnInit() {

    console.log('is authenticated: ' + this.isAuthenticated);
  }

  
  login() {
    this.oktaAuth.loginRedirect();
  }
  logout() {
    this.oktaAuth.logout('/');
  }

  checkAuthorization(group: string) {
    var isAuthorized = false;

    try {
        this.user.groups.forEach(element => {
            if (element === group) {
                console.log(element, group);
                isAuthorized = true;
            }
        });
    }
    catch (err) {
        console.log("User groups undefined");
    }

    return isAuthorized;
}


}
