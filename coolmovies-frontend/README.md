# Coolmovies web challenge

You have to add the cool movies review feature to the existing `coolmovies-frontend`.

We have created a basic app for you to get started in.

What tooling has been setup for you:

- [Next.js](https://nextjs.org/) (Build Framework)
- [MUI](https://mui.com/) (Component Library)
- [Redux Toolkit](https://redux-toolkit.js.org/) (State Management)
- [Redux-Observable](https://redux-observable.js.org/) (State Side-effect Middleware)
- [Apollo GraphQL](https://www.apollographql.com/) (GraphQL Query Client)

You must use these tools to complete the test. If you're unfamiliar with any of these, please read their documentation. We have also added some example code for the ideal patterns we would like to see. Have a look at `pages/index.tsx`.

We are providing you a GraphQL API mock application to consume.

## Acceptance Criteria

**You will be evaluated on your UI/UX as we believe this is an important skill to have. Please put time and effort into this.**

There are 2 main components that must be developed for this feature: (You have flexibility on the UI/UX for this)

1. Listing of the movie reviews.
2. Editing the existing movie reviews.
3. Adding additional reviews.

The feature must be available on the `/reviews` endpoint of the application.

The design must be responsive.

You will be evaluated against your ability to understand and use the tooling provided and mimic existing patterns that are shown in the examples.

There are a couple of additional things that we would like to see in your submission.

1. Our designers don't like the default MUI blue. Please change this.
2. Make the proxied GraphQL URL an environment variable.
3. Improve the folder structure of the frontend application how you see fit. (It's intentionally not great)
4. Add the custom `edit.svg` from the `public` folder as an icon to launch editing the review.
5. Add a unit testing framework of your choice, and some unit tests around the more complex areas of your code.

---

## Results

### Movie List

When accessing `/movies` you will be presented with all movies in our database, with infos like it's cover image, title, and average rating.

![image](https://user-images.githubusercontent.com/42496316/205362919-fcbbd1d8-4561-4352-ae62-6a370862c497.png)

Clicking on a movie, will pop a screen up with more info about it, it's reviews and a form to create your own review!

### Movie Reviews

This page shows all movie reviews, and some more detailed information about the movie like the release date and the directors name.
Here, there is a form you can go through at the bottom, to add your own reviews, and there is also the ability to edit reviews by clicking on the edit icon on the top right of any review.

https://user-images.githubusercontent.com/42496316/205364032-18ae71b2-6607-43ea-8573-304d302dfb44.mov




