import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { TriggerFunction } from './trigger';

export interface TriggerFunctionProps extends StackProps {
  isProd?: boolean;
}

export class TriggerFunctionStack extends Stack {
  constructor(scope: Construct, id: string, props?: TriggerFunctionProps) {
    super(scope, id, props);

    new TriggerFunction(this, 'TriggerFunction');
  }
}