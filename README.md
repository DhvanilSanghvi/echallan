# E-Challan system implemented on blockchain

## This project is a POC of implementation of blockchain on an e-challan system. 

There are 3 servers to be created :
  1. REST server for hyperledger composer
  2. MongoDB database
  3. Angular 8 server


First clone the whole project on your system. Then, follow these steps : 

### Installing the business network on hyperledger fabric and creating REST api

1. Go to Business Network directory
2. Install the tutorial-network@0.0.7.bna on hyperledger fabric using :

```
composer network install --card PeerAdmin@hlfv1 --archiveFile tutorial-network@0.0.7.bna && composer network start --networkName tutorial-network --networkVersion 0.0.7 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card && composer-rest-server -c admin@tutorial-network -n never -u true -w true
```

This will run a composer REST server on https://localhost:3000/

### Creating database server

Prerequisites:

Install Mongodb.
Install nodemon using 
```
sudo apt install nodemon
```


1. Go to api directory
2. Run the following command :
```
nodemon server
```

The node server will then run on https://localhost:4000

### Serving the angular app

In the root directory, use the following command :
```
ng serve
```

The angular server will run on https://localhost:4200
Now, you can access your web application on https://localhost:4200.

Thank you.



















  



  
