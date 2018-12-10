import { Injectable } from "@angular/core";
import { OktaAuthService } from '@okta/okta-angular';

@Injectable()
export class AccessService {

    userGroups: any;

    constructor(public oktaAuth: OktaAuthService) {
        this.setUpUser();
    }

    async setUpUser() {
        const userClaims = await this.oktaAuth.getUser();

        this.userGroups = userClaims.groups;
    }

    isAuthorized(group: string) {
        var isAuthorized = false;

        try {
            this.userGroups.forEach(element => {
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