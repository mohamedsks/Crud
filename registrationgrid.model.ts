export class RegistrationsEntity {
    RegId: number;
    Name: string;
    Age: number;
    Qulification: string;
    Contactno: number;
    City: string;
}
export class RegistrationListEntity {
    RegistrationList: RegistrationsEntity[];
    TotalRecord: number;
}
