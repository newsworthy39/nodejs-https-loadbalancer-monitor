# nodejs-https-loadbalancer-monitor

A monitoring microservice, that uses the golang-https-accelerator and nodejs-https-loadbalancer-api. 

# Installation
Start the nodejs-https-loadbalancer-api
Install the golang-https-loadbalancer, choosing some random root-access credentials. 
Its important, that you select the correct apex-domain, as api.apex-domain.tld, to the
loadbalancer, as it will become the first microservice, to the loadbalancer.

Point your DNS to the loadbalancer front-facing IP, and then

# SDK
Download the python-sdk, to enable CLI access for account-creation/destruction etc.

# Develop
Start developing microservices, start them up, and have them register themselves in the
loadbalancer, without any further configuration.
