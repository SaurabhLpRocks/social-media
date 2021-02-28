export interface ParsedError {
  // #region Properties (11)

  angularRoute: string;
  appId: string;
  username?: string;
  errorName: string | null;
  id?: string;
  message: string;
  firstName?: string;
  originalErrorStack: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parsedStackInfo?: any;
  stackFrames: string;
  timeInEpochMilliseconds: number;

  // #endregion Properties (11)
}
