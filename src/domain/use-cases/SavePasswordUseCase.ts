
export interface SavePasswordDto {
  application: string,
  identifier: string,
  password: string,
}
export interface SavePasswordUseCase {
  execute(data: SavePasswordDto): Promise<void>
}
