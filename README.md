# Please find the link to the hosted version of this project here: https://games-review-nc.netlify.app/

# NC Games Review App

The NC Games Review App is a web application that allows users to browse, read, and interact with reviews related to board games. It provides a platform for users to explore various game reviews, leave comments, and engage with the gaming community.

## Features

- **Review Listing:** Users can view a list of game reviews on the homepage, displaying essential information such as the game title, category, designer, and owner.
- **Review Details:** Clicking on a review card takes the user to a detailed view of the review, providing more information about the game, including the review body, comments, and votes.
- **User Authentication:** Users can log in to the application to access additional features. Authentication is simulated for ease of use.
- **Commenting:** Logged-in users can leave comments on game reviews, allowing them to share their thoughts and engage in discussions with other users.
- **Voting:** Users can express their opinions on reviews by upvoting or downvoting them. The total number of votes for each review is displayed on the review card and detailed view.
- **Categories:** Reviews are organized into different categories, making it easier for users to find reviews based on their interests. The application fetches the available categories from the backend API.
- **Random Game Photos:** When creating a new review, the application automatically fetches a random game photo from the Pexels API for ease of use and also to enhance the visual appeal of the review.

## Technologies Used

### Frontend:

- React:
- Axios:
- Daisy UI:
- React Router:
- Pexels API:

### Backend:

- Node.js:
- Express.js:
- PostgreSQL:
