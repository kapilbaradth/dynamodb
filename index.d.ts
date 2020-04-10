import { AnySchema } from '@hapi/joi';

export interface SchemaConfig {
  hashKey: string;
  rangeKey?: string;
  timestamps: boolean;
  schema: {
    roles: any;
    [key:string]: AnySchema
  }
}

export function define(modelName: string, config: SchemaConfig): any;
export var types: any;
