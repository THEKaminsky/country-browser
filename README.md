# Tech Stack
React + TypeScript + Vite + Vitest + Tailwind CSS

# Demo

# Installation
Pretty straight forward, clone the repo and run `npm install` to install all the dependencies. Then run `npm run dev` to start the development server.

# Decisions Made
- I decided to use Vite as the build tool for the project. Vite is a fast and lightweight build tool that provides a lot of features out of the box, such as hot module replacement, code splitting, and more. I will say, however, this was my first time using Vite and that led to a few challenges that caused this to take a bit longer than I anticipated. Jest doesn't not play nice with Vite, so I had to use Vitest instead. This was a bit of a pain, but I was able to get it working eventually.
- React for the frontend.
- Tailwind CSS for styling.
- TypeScript for type checking and type safety.
- As requested, I worked with TDD (Test Driven Development) to ensure that the application is working as expected and covered. Build a test, it fails, build to pass. As you get further into the project, I can start to get more challenging to follow that process when all you see is the whole picture and not individual stories.

# Requirements Provided
## Browsing Countries
As a curious person, I want to scroll through a list of countries, so that I can see what’s out there.

## Fetch and display a paginated or infinite-scrolling list of countries.
Each country should show at least its name, flag, population, region, and capital.
## Country Details View
As a user, I want to click on a country, so that I can see more information about it.

Display detailed info such as native name, subregion, timezones, currencies, languages, and borders.
Implement a back button to return to the country list.
## Responsive Design
As a person on the go, I want the UI to adapt to my device, so that it’s always easy to use.

# Optionals
I decided to go with the infinite-scrolling approach, so I didn’t have to worry about pagination. Seeing as this is a PoC/MVP, I tend to put forth the simplest solution that works. However, if I were to build a more robust application, I would definitely consider pagination. Same goes for the favoriting system. I have built out tables/lists with favoriting functionality, but this was about a simpler MVP and proof of concept/understanding.

