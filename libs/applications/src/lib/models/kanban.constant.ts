import {Tenant} from "@new-rentals/shared";

export  const KANBAN_CONSTANT: Record<string, { cdkDropListData: string, cdkDropListConnectedTo: string[], data: Tenant[], apiCall: string }> = {
  received: {cdkDropListData: 'received', cdkDropListConnectedTo: [], data: [], apiCall: 'createTenant'},
  interviewing: {cdkDropListData: 'interview', cdkDropListConnectedTo: [], data: [], apiCall: 'interviewTenant'},
  declined: {cdkDropListData: 'declined', cdkDropListConnectedTo: [], data: [], apiCall: 'declineTenant'},
  accepted: {cdkDropListData: 'accepted', cdkDropListConnectedTo: [], data: [], apiCall: 'approveTenant',}
}
