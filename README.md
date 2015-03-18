# condensation-examples

Example for [condensation](https://github.com/kmcgrath/condensation)

## Build All

    > npm install
    > bower install
    > gulp condensation:build

Then look in the `dist` directory to see built CloudFormation templates

## Examples

### Amazon Image Mappings

#### cftemplates/amzlinux.template.hbs
Uses [particles-ec2](https://github.com/kmcgrath/particles-ec2) to
populate a Mapping of regions to AMI for a Amazon supported build.
