import { appConstants } from '@shared/constants/app.constant';

export class ParsedCustomServerError {
  // #region Properties (3)

  error?: string | null;
  public message: string | null;
  warning?: string | null;

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(error?: string, message?: string) {
    this.error = error || appConstants.defaultServerError.error;
    this.message = message || appConstants.defaultServerError.message;
  }

  // #endregion Constructors (1)
}
