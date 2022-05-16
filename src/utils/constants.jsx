import { adminOptions, opsOptions, opsOptions2, userOptions } from "./options"

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
  admin:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6InRlcyIsImxhc3RuYW1lIjoidGVzIiwicm9sZV9pZCI6M30.usfNayKlXwEsp-2ZlCvQeX5PaKj5P9uPrB7tGZi2OAQ',
  user: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwibmFtZSI6InRlcyIsImxhc3RuYW1lIjoidGVzIiwicm9sZV9pZCI6NH0.CavAA-YLneY8_W2JKI0q26NaC4Obr9JlJznDb76-65w',
  ops: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6InRlcyIsImxhc3RuYW1lIjoidGVzIiwicm9sZV9pZCI6MX0.uVEMB27DGKoNE1ecJir7MivpYctF6zqyEdEoPgHI-qk',
  ops2: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6InRlcyIsImxhc3RuYW1lIjoidGVzIiwicm9sZV9pZCI6Mn0.6EYFUc_ea5H1ehkbEpzjz9W-WqxRn9OzRg2aqDn6JD0'
})

export const ApiRoutes= Object.freeze({
  services:'services',
  tickets:'tickets',
  users:'users',
  ticketsStatus:''
})