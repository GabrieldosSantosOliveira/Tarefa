export interface SavePasswordDto {
  application: string,
  identifier: string,
  password: string,
}
export interface SavePasswordRepository {
  create(data: SavePasswordDto): Promise<void>
}
