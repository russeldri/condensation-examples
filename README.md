# condensation-examples

Examples for [condensation](https://github.com/kmcgrath/condensation)

## Quick Start

Ensure [gulp](http://gulpjs.com) is installed

Then:

    > npm install
    > gulp condensation:build

Then look in the `dist` directory to see built CloudFormation templates

Templates can be deployed by added creating `config/local.js` with bucket definitions
and running:

    > gulp condensation:deploy

## Examples

### cftemplates

#### cftemplates/traditional/amzlinux.template.hbs
Uses [particles-ec2](https://github.com/kmcgrath/particles-ec2) to
populate a Mapping of regions to AMI for an Amazon supported build.

#### cftemplates/traditional/amzlinux\_with\_helper.template.hbs
Uses [particles-ec2](https://github.com/kmcgrath/particles-ec2) to
populate a region specific AMI without the need for a mapping.

#### cftemplates/layouts/rds/mysql\_multi\_az\_with\_read\_replica\_primary.template.json.hbs
Will create a Multi-AZ RDS Instance that can be repliated to another
region.

Run with all defaults to set up quickly.

#### cftemplates/layouts/rds/mysql\_multi\_az\_with\_read\_replica\_secondary.template.json.hbs
Creates a cross-region read replica that was created with the primary
template.

Run in a second region and populate `SourceDBInstanceIdentifier` with
the ARN of the primary Multi-AZ RDS Instance.


#### cftemplates/layouts/vpc\_with\_2\_subnets.template.json.hbs
Demonstrates the use of front matter to create a VPC with 2 subnets.

#### cftemplates/layouts/vpc\_with\_3\_subnets.template.json.hbs
Demonstrates the use of front matter to create a VPC with 3 subnets.

### partials

#### vpc\_simple.template.json.hbs
Uses [particles-common-core](https://github.com/kmcgrath/particles-common-core) and
[particles-common-vpc](https://github.com/kmcgrath/particles-vpc) to build a stack that
creates a VPC, SecurityGroup, Routes, Subnets and optional InternetGateway.

## Compiled Templates

All of the examples here are compiled and deployed to buckets in every AWS region

* condensation-examples.us-east-1
* condensation-examples.us-west-2
* condensation-examples.us-west-1
* condensation-examples.eu-west-1
* condensation-examples.eu-central-1
* condensation-examples.ap-southeast-1
* condensation-examples.ap-southeast-2
* condensation-examples.ap-northeast-1
* condensation-examples.sa-east-1
