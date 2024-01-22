import { Handler } from 'aws-cdk-lib/aws-lambda';
import { CodePipeline } from 'aws-sdk';

const codepipeline = new CodePipeline();

export const handler: Handler = async (): Promise<void> => {
    const params: CodePipeline.Types.StartPipelineExecutionInput = {
        name: 'cypress-ts-pipeline'
    };

    try {
        const data = await codepipeline.startPipelineExecution(params).promise();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};
