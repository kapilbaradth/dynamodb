import { AnySchema } from '@hapi/joi';
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';

export interface SchemaConfig {
  hashKey: string;
  rangeKey?: string;
  timestamps: boolean;
  schema: {
    roles?: any;
    [key:string]: AnySchema
  };
}

export interface DynamoDB {
  type: any;
  AWS: any;
  documentClient(docClient: DocumentClient);
  define(modelName: string, config: SchemaConfig): any;
  createTables();
} 

export function define(modelName: string, config: SchemaConfig): any;
export var types: any;
export var AWS;
export function documentClient(docClient: DocumentClient);

// export namespace dynamodb;
