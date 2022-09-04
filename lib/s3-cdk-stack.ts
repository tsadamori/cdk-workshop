import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'

import * as s3 from 'aws-cdk-lib/aws-s3'

export class S3CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const s3Bucket = new s3.Bucket(this, 's3Bucket', {
      bucketName: 'cdk-bucket-979569501840',
    })
  }
}
