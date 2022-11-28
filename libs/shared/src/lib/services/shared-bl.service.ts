import { Injectable } from '@angular/core';
import {Tenant} from "../models/graphql";

@Injectable({
  providedIn: 'root'
})
export class SharedBlService {

  constructor() { }

  getKanbanData(tenants: Tenant[]): Record<string, { cdkDropListData: string, cdkDropListConnectedTo: string[], data: Tenant[], apiCall: string }> {
    const kanbanData: Record<string, { cdkDropListData: string, cdkDropListConnectedTo: string[], data: Tenant[], apiCall: string }> = {
      received: {cdkDropListData: 'received', cdkDropListConnectedTo: [], data: [], apiCall: 'createTenant'},
      interviewing: {cdkDropListData: 'interview', cdkDropListConnectedTo: [], data: [], apiCall: 'interviewTenant'},
      declined: {cdkDropListData: 'declined', cdkDropListConnectedTo: [], data: [], apiCall: 'declineTenant'},
      accepted: {cdkDropListData: 'accepted', cdkDropListConnectedTo: [], data: [], apiCall: 'approveTenant',}
    }
    tenants.forEach(tenant => {
      kanbanData[tenant?.state].data.push(tenant);
    });
    return kanbanData;
  }
}
