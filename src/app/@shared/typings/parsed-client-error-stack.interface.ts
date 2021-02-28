export interface ParsedClientErrorStack {
  // #region Properties (9)

  columnNumber: number;
  fileName: string;
  functionName: string;
  isFailedToParse?: boolean;
  lineNumber: number;
  message?: string;
  parseFailedStack?: string;
  stack: string;
  url?: string;

  // #endregion Properties (9)
}
