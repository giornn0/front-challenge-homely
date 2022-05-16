import { adminOptions, opsOptions, userOptions } from "./options"

export const Roles = Object.freeze({
  Admin:'admin',
  Cliente:'user',
  Marketing:'marketing',
  Operador:'ops',
  Operador2:'ops2',
})

export const Options= Object.freeze({
  admin:adminOptions,
  user: userOptions,
  ops: opsOptions,
  ops2: opsOptions2
})

export const AUTH_TOKENS= Object.freeze({
  admin:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwibmFtZSI6ImFkbWluIiwibGFzdG5hbWUiOiJkaWYiLCJyb2xlX2lkIjoxfQ.FxxA3XGu8b_Qd_fCA6JTYVIfbgiUkUS5X50F69jzIOI',
  user: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6InRlcyIsImxhc3RuYW1lIjoidGVzIiwicm9sZV9pZCI6NH0.BbR7POL71vut9zh6Iw4hd-Znos4OdQsrfozM28pJF7Y',
  ops: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6Im9wZXJhZG9yIDEiLCJsYXN0bmFtZSI6ImRpZiIsInJvbGVfaWQiOjJ9.rtMZgv36laPztF7MXfG9PmI2SlmoTq-Td1qBl3D0V24',
  ops2: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6Im9wZXJhZG9yIDIiLCJsYXN0bmFtZSI6ImRpZiIsInJvbGVfaWQiOjJ9.YIexZKHCkXe2wrwL-ObAcxuCeBr-X_meALFNRoVhozI'
})

export const ApiRoutes= Object.freeze({
  services:'services',
  tickets:'tickets',
  users:'users',
  ticketsStatus:''
})