import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  constructor(private accountsService: AccountsService) { }

  onSetTo(status: string) {
    // this.statusChanged.emit({ id: this.id, newStatus: status });
    // this.loggingService.logStatusChange(status);

    this.accountsService.updateStatus(this.id, status);
    this.accountsService.statusUpdated.emit(status);
  }
}
