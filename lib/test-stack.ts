import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

interface TestStackProps extends StackProps {
    stageName?: string
}

export class TestStack extends Stack {
    constructor(scope: Construct, id: string, props: TestStackProps) {
        super(scope, id, props);
    }
}