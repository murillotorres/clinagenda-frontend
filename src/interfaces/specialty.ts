export interface ISpecialty {
  id: number
  name: string
}

export type GetSpecialtyListRequest = {
  itemsPerPage: number
  page: number
}

export type GetSpecialtyListResponse = {
  total: number
  items: ISpecialty[]
}
