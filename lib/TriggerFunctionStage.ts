import { StackProps, Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { TriggerFunctionStack } from '../inrastructure/stack';

export interface TriggerFunctionStageProps extends StageProps, StackProps {
  isProd?: boolean;
}

export class TriggerFunctionStage extends Stage {
  constructor(scope: Construct, id: string, props?: TriggerFunctionStageProps) {
    super(scope, id, props);

    new TriggerFunctionStack(this, 'TriggerFunction', {
      ...props,
      description: 'Trigger lambda example.'
    });
  }
}