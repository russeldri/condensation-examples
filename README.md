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

#### cftemplates/amzlinux.template.hbs
Uses [particles-ec2](https://github.com/kmcgrath/particles-ec2) to
populate a Mapping of regions to AMI for an Amazon supported build.

#### cftemplates/amzlinux\_with\_helper.template.hbs
Uses [particles-ec2](https://github.com/kmcgrath/particles-ec2) to
populate a region specific AMI without the need for a mapping.

#### cftemplates/vpc\_with\_2\_subnets.template.json.hbs
Demonstrates the use of front matter to create a VPC with 2 subnets.

#### cftemplates/vpc\_with\_3\_subnets.template.json.hbs
Demonstrates the use of front matter to create a VPC with 2 subnets.

### partials

#### vpc\_simple.template.json.hbs
Uses [particles-common-core](https://github.com/kmcgrath/particles-common-core) and
[particles-common-vpc](https://github.com/kmcgrath/particles-vpc) to build a stack that
creates a VPC, SecurityGroup, Routes, Subnets and optional InternetGateway.
