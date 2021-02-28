export interface ServerResponse {
  // #region Properties (6)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  error?: string;
  errorCode?: string;
  message: string;
  totalRecords?: number;
  warning?: string;

  // #endregion Properties (6)
}
