# Etsy Gallery

This project is a recreation of the gallery component from Etsy's item sales page.  It is being made in conjunction with my team mates on the Team Chupacabra McThundercat organization in an effort to develop our skills by recreating components from the Etsy page.  The sole purpose is to develop and showcase our skills, this component will not be used outside of that scope.

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamchupacabramcthundercats/etsy-reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

To render the components on your page, insert a div with the id "gallery" into your html where you'd like the component to render.

If serving with a proxy, you'll need to proxy the routes for the API:

  ## GET: ‘/api/images/:productId’ 
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

  ## PATCH: ‘/api/favorite/:productId’
    Used to favorite or unfavorite the product matching the productId parameter.  PATCH requests sent to this endpoint will toggle the isFavorite property of the product.  If successful, the request will return status 200.


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node v12.18.3
- Axios v0.19.2
- Express v4.17.1
- mySQL: v2.18.1
- prop-types: v15.7.2
- react: v16.13.1
- react-dom: 16.13.1

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

Ensure mysql server is running:

```sh
mysql.server status
```

If mysql is not currently running, start the database with:

```sh
mysql.server start
```

Once mysql is running, run the following commands:

```sh
npm run reset-db
npm run seed-db
npm run server
```