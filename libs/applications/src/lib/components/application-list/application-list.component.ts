import {Component, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {ApplicationDetailModalComponent} from "../application-detail-modal/application-detail-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {KANBAN_CONSTANT} from "../../models/kanban.constant";
import {SharedFacadeService, SharedStoreStateEnum, Tenant} from "@new-rentals/shared";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {switchMap, tap} from "rxjs";

@UntilDestroy()
@Component({
  selector: 'new-rentals-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss'],
})
export class ApplicationListComponent implements OnInit {
  kanbanConstant: Record<string, { cdkDropListData: string, cdkDropListConnectedTo: string[], data: Tenant[], apiCall: string }> = KANBAN_CONSTANT
  constructor( public matDialog: MatDialog, private sharedFacadeService: SharedFacadeService) {}

  ngOnInit(): void {
    this.getTenants();
    this.listenToTenantState();
  }

  getTenants(): void {
    this.sharedFacadeService.getTenants().subscribe();
  }

  listenToTenantState(): void {
    this.sharedFacadeService.specificStateChange(SharedStoreStateEnum.TENANTS_KANBAN).pipe(untilDestroyed(this), tap((tenantsKanban) => {
      // @ts-ignore
      this.kanbanConstant = tenantsKanban;
    })).subscribe();
  }

  openApplicationDetail(): void {
    this.matDialog.open(ApplicationDetailModalComponent, {
      panelClass: ['modal-sm', 'full-width-modal', 'common-chat-modal'],
      position: {right: '0', top: '0', bottom:'0'},
      data: {
      }
    });
  }

  drop(event: CdkDragDrop<Tenant[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // @ts-ignore
      this.sharedFacadeService[this.kanbanConstant[event.container.id]['apiCall']](event.previousContainer.data[event.previousIndex]?.id).pipe(switchMap(() => this.sharedFacadeService.getTenants())).subscribe();
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
