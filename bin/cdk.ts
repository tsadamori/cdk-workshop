#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib'
import { CdkStack } from '../lib/cdk-stack'
import { Ec2CdkStack } from '../lib/ec2-cdk-stack'
import { S3CdkStack } from '../lib/s3-cdk-stack'
import { RoleCdkStack } from '../lib/role-cdk-stack'

const app = new cdk.App()
new CdkStack(app, 'CdkStack')
new Ec2CdkStack(app, 'EC2CdkStack', {
  env: {
    account: '979569501840',
    region: 'ap-northeast-1',
  },
})
new S3CdkStack(app, 'S3CdkStack')
