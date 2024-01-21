import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { TestStack } from "./test-stack";

export class PipelineStage extends Stage {
    constructor(scope: Construct, id: string, props: StageProps ) {
        super(scope, id, props)

        new TestStack(this, 'TestStack', {
            stackName: props.stageName
        })
    }
}