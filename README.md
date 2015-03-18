# condensation-examples

Examples for [condensation](https://github.com/kmcgrath/condensation)

## Quick Start

Ensure [gulp](http://gulpjs.com) and [bower](http://bower.io) are  installed globally

    > bower install
    > gulp condensation:build

Then look in the `dist` directory to see built CloudFormation templates

## Examples

### Amazon Image Mappings

#### cftemplates/amzlinux.template.hbs
Uses [particles-ec2](https://github.com/kmcgrath/particles-ec2) to
populate a Mapping of regions to AMI for an Amazon supported build.
