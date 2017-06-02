import { Injectable, EventEmitter } from '@angular/core';

import { LoggingService } from 'app/logging.service';

@Injectable()
export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) {}

    addAccount(nameAdded: string, statusAdded: string) {
        this.accounts.push({name: nameAdded, status: statusAdded});
        this.loggingService.logStatusChange(statusAdded);
    }

    updateStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(newStatus);
    }
}
