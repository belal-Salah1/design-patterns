export abstract class BaseDiscount {
    calulateDiscount(amount:number, isOnline:boolean){
        if (amount <= 0) return 0;
        const discount = this.getDiscount(amount ,isOnline);
        return amount - (amount * discount) ;
    }

    protected abstract getDiscount(amount:number , isOnline:boolean):number

    
}
