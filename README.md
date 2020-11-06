![](https://i.imgur.com/n5douoy.png)

# Halvsy Gallery

Welcome to Halvsy Gallery, the gallery component for the Halvsy web app.  The Halvsy Gallery is a service intended to provide a plug and play gallery component built off of a carousel design model.

The main gallery component utilizes some simple animations and transitions to add a little life to the component.  Thumbnails are presented vertically and can be navigated using a scroll wheel or by mousing over the top or bottom portion of the carousel.  Included is a "favorite" button in the corner of the main image view, allowing users to add the product to their favorites from any image.

![](https://media.giphy.com/media/X8BvMHZJXQRJ3mj51x/giphy.gif)

Also included is an on-click modal which allows the user to get a closer look at the main image.  The modal also displays the rest of the images in the gallery in a vertical carousel using an offset thumbnail size to make it visually distinct.  The user can navigate through the gallery using the modal without influencing the image that's currently selected in the main carousel.

![](https://media.giphy.com/media/Gi8fyxH5n0LQympMaZ/giphy.gif)

The back end of the service is powered by an Express server with data persistence provided via a MySQL database.

## Related Projects

  - [Halvsy Reviews](https://github.com/teamchupacabramcthundercats/etsy-reviews)
  - [Halvsy Gallery](https://github.com/teamchupacabramcthundercats/Halvsy-Gallery)

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#Requirements)
3. [Installation](#Installation)

## Usage

To render the reviews component on your page, insert a div with the id "gallery" into your html where you'd like the component to render.

The server is set up to serve requests from: 
>localhost:7777/product/{some number ending in a value between 1-100}

Example: `localhost:7777/product/43`

If serving with a proxy, you'll need to proxy the routes for the API:

### GET: ‘/api/images/:productId’ 
Used to get the details object for the productId containing the product’s id, product name, a boolean value indicating if the product is marked as a favorite, and an images property that contains a collection of image objects associated with the product.  Each image object in the collection will contain three url strings that link to a full, small, and thumbnail sized version of the image.  GET requests sent to this endpoint will return an object of the following format:

```sh
{
  id: <number>,
  name: <string>,
  isFavorite: <boolean>
  Images: [
            {
              full: <string>,
              small: <string>,
              thumbnail: <string>
            },
            { … },
            ...
          ]
}
```

### PATCH: ‘/api/favorite/:productId’
Used to favorite or unfavorite the product matching the productId parameter.  PATCH requests sent to this endpoint will toggle the isFavorite property of the product.  If successful, the request will return status 200.


## Requirements
Currently deployment via Docker is the only supported deployment method.

We require: 
- [Docker v19.03.12](https://www.docker.com/get-started)
- [docker-compose v1.27.4](https://docs.docker.com/compose/install/)

## Installation
Ensure that you have Docker and docker-compose installed.
For more information on this process, see [Docker's website](https://www.docker.com/get-started)

Because Halvsy Gallery is configured to launch using a docker-compose file, that's the only file you need!

Open your terminal and navigate to a folder you'd like to store the docker-compose.yml file.

Type into your terminal: `$ nano docker-compose.yml`

This should open a new file called "docker-compose.yml" in Nano, a simple text editor.

Now, copy the following code into the new docker-compose.yml file:
```sh
version: '3'

services:
  gallery:
    image: joelcarpenter/halvsy-gallery
    depends_on:
      - 'gallery-db'
    ports:
      - '7777:7777'
    command: ["./utils/wait-for-it.sh", "gallery-db:3306", "--timeout=30", "--", "npm", "start"]
  gallery-db:
    image: joelcarpenter/halvsy-gallery-db
    command: --default-authentication-plugin=mysql_native_password
    environment: 
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: gallery
      MYSQL_USER: student
      MYSQL_PASSWORD: student
```

Once that's done, press CTRL + X, to exit, followed by 'Y' and then press Enter to save your changes.

That's it!  Now just enter the following line in your terminal to launch the service.

```sh
docker-compose up -d
```

Once docker-compose is finished running, navigate to:
`localhost:7777/product/{some number ending in a value between 1-100}`
