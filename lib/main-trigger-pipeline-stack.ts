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


    pipeline.addStage(new PipelineStage(this, 'TestStage', {
      stageName: 'TestStage',
    }))

    // testStage.addPost(new ShellStep('e2e-test', {
    //   commands: [

    //   ]
    // }))

    // e2eStage.addPre(new CodeBuildStep('RunCypressTests', {
    //   commands: [
    //     ...
    //   ],
    // }));
  }
}
