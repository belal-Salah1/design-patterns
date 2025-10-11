export interface Notifications {
    success(message:string):string;
    warn(message:string):string;
    error(message:string):string;
}
