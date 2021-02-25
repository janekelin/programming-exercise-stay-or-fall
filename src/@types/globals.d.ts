/* eslint-disable no-unused-vars */
// @ts-check

export type ValidationOptionType =
  | import('../../node_modules/@types/readline-sync/index.d').BasicOptions
  | undefined
  | any;

export type InterfaceType = {
  inform: (message: string) => any;
  prompt: (message: string, validation: ValidationOptionType) => any;
};

export type InterfaceProvidersType = {
  [key: string]: any;
};

export type PointType = {
  x: number;
  y: number;
};

export type StateType = {
  tableSize: {
    width: number;
    height: number;
  };
  startPosition: PointType;
  commands: number[] | never[];
  result: PointType;
};

export type StateUpdateType = Partial<StateType>;

export type ValidationsType = {
  tableSize: ValidationOptionType;
  startPosition: ValidationOptionType;
  commands: ValidationOptionType;
  [key: string]: any;
};
