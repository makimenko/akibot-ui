import { Component, OnInit } from '@angular/core';

export interface ISideNavItem {
    value: string;
    icon: string;
}
@Component({
    selector: 'menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {

    public sideNavOpened: boolean = false;
    public chosenSideNav: string = "orientation";

    public sideNavItems: ISideNavItem[] = [
        {
            value: "orientation",
            icon: "fa fa-eye"
        },
        {
            value: "move",
            icon: "fa fa-arrows"
        }
    ];

    constructor() { }

    public ngOnInit() { }

    public onSideNavToggle() {
        this.sideNavOpened = !this.sideNavOpened;
    }

    public onCloseSideNav() {
        this.sideNavOpened = false;
    }

    public getChosenSideNavIcon(): string {
        var res: string;
        this.sideNavItems.forEach(element => {
            if (element.value == this.chosenSideNav) {
                res = element.icon;
            }
        });
        return res;
    }

}