
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Further comments

I've decided to use Nest.js with TypeScript instead of Python because it fits better with the frameworks you are working with. Using Python could have been quicker, but I wanted to make sure you understand that I can adapt to the workflow of Ejam. 

For the validation of the score, I could have used a DTO but I wanted to make the response more unique, so I came up with this solution.

## If I had more time
There are some features that I would had added if I had some more time:
  
  -A PATCH method to update de score of the superheroes (superheroes can redeem themselves)
  
  -A GET method to find superheroes with certain score
  
  -An option to sort the superheroes by ascending or descending humility score