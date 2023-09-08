// DTO - Data Transfer Object, used to declare what the data object should look like, so if incoming request doesn't contain an object with the shape defined by the DTO, it will be rejected
// Validate incoming requests & make sure they're properly structured & contain valid data

export class CreateDataDto {
    readonly id: number;
    readonly data: string;
  }