import { Stack, StackProps } from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import { PipelineStage } from './pipeline-stage';

export class MainTriggerPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'main-trigger-pipeline', {
      pipelineName: "main-trigger-pipeline",
      selfMutation: true,
      synth: new ShellStep('Syhtn', {
        input: CodePipelineSource.gitHub('halitos/main-trigger-pipeline', 'main'),
        commands: ['npm ci', 'npx cdk synth --quiet'],
      })
    })

    const secondPipelineArn = 'arn:aws:codepipeline:eu-west-1:228194216045:cypresstspipeline'


    const TestStage = pipeline.addStage(new PipelineStage(this, 'TestStage', {
      stageName: 'TestStage',
    }))


    TestStage.addPost(new ShellStep('RunCypressTests', {
      commands: ['aws codepipeline start-pipeline-execution --name cypress-ts-pipeline']
    }));
  }
}
