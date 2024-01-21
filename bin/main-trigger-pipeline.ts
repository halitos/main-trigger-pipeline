#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MainTriggerPipelineStack } from '../lib/main-trigger-pipeline-stack';

const app = new cdk.App();
new MainTriggerPipelineStack(app, 'MainTriggerPipelineStack', {
});