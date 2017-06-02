export class CounterService {
    countActive = 0;
    countInactive = 0;
    
    activate() {
        this.countActive++;
        console.log('Inactive -> Active: ' + this.countActive);
    }

    deactivate() {
        this.countInactive++;
        console.log('Active -> Inactive: ' + this.countInactive);
    }
}
