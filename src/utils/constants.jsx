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
  ops: opsOptions
})

export const AUTH_TOKENS= Object.freeze({
  admin:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6InRlcyIsImxhc3RuYW1lIjoidGVzIiwicm9sZV9pZCI6MX0.HJWnYKhjO2Nwioq-Y5X64zCCC2OiSpibIcy1krNKal0',
  user: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwibmFtZSI6InRlcyIsImxhc3RuYW1lIjoidGVzIiwicm9sZV9pZCI6NH0.5krl0iWHri30A_2ZCJsVTPIai7soWWs5sRIzHwKeD_s',
  ops: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6InRlcyIsImxhc3RuYW1lIjoidGVzIiwicm9sZV9pZCI6Mn0.ANHD0PbgUMmQDfPC0O53yqFSQV9kt9cCNXBKzH0sAts',
  ops2: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6InRlcyIsImxhc3RuYW1lIjoidGVzIiwicm9sZV9pZCI6Mn0.ANHD0PbgUMmQDfPC0O53yqFSQV9kt9cCNXBKzH0sAts'
})

export const ApiRoutes= Object.freeze({
  services:'services',
  tickets:'tickets',
  users:'users',
  ticketsStatus:''
})