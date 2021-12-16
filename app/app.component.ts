import { Component, ViewEncapsulation } from '@angular/core';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'my-app',
    styles: [`
        html,
        body,
        my-app {
            padding: 0;
            height: 100%;
        }

        my-app {
            display: flex;
            flex-direction: column;
        }

        kendo-drawer-container {
            flex: 1 1 auto;
            overflow-y: auto;
        }
        .k-icon {
            font-size: 20px;
        }
        .custom-toolbar {
            width: 100%;
            background-color: #f6f6f6;
            line-height: 10px;
            border-bottom: inset;
            border-bottom-width: 1px;
            padding: 3px 8px;
            color: #656565;
        }
        .mail-box{
            margin-left: 20px;
            font-weight: bold;
            font-size: 17px;
        }
    `],
    template: `
    <div class="custom-toolbar">
    <button
        kendoButton
        icon="menu"
        look="flat"
        (click)="drawer.toggle()"
    ></button>
    <span class="mail-box">Mail Box</span>
    </div>
    <kendo-drawer-container>
        <kendo-drawer #drawer
            [items]="items"
            mode="push"
            [mini]="true"
            [expanded]="true"
            (select)="onSelect($event)">
        </kendo-drawer>

        <kendo-drawer-content>
            <my-content [selectedItem]="selected"></my-content>
        </kendo-drawer-content>
    </kendo-drawer-container>
    `
})
export class AppComponent {
    public selected = 'Inbox';

    public items: Array<DrawerItem> = [
        { text: 'Inbox', icon: 'k-i-inbox', selected: true },
        { separator: true },
        { text: 'Notifications', icon: 'k-i-bell' },
        { text: 'Calendar', icon: 'k-i-calendar' },
        { separator: true },
        { text: 'Attachments', icon: 'k-i-hyperlink-email' },
        { text: 'Favourites', icon: 'k-i-star-outline' }
    ];

    public onSelect(ev: DrawerSelectEvent): void {
        this.selected = ev.item.text;
    }
}
