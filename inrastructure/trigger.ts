import { join } from 'node:path';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';


export class TriggerFunction extends NodejsFunction {
  public constructor(scope: Construct, id: string, environment?: string) {
    super(scope, id, {
      handler: 'index.handler',
      functionName: 'pipeline-trigger',
      runtime: Runtime.NODEJS_18_X,
      entry: join(__dirname, '/../src/index.ts'),
      environment: { ENVIRONMENT: environment ?? '' },
      logRetention: RetentionDays.ONE_WEEK,
    });
  }
}