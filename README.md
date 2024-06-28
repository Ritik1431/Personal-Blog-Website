# Simple Blog Application

## Description

This project is a simple blog application built using Node.js and Express.js. It allows users to view a blog post on the home page and provides an interface to edit the post. The post content can be updated via a PATCH request.

## Features

- **Home Page**: Displays the current blog post with an image, heading, and content.
- **Edit Page**: Allows users to update the image link, heading, and content of the blog post.
- **Method Override**: Uses the `method-override` package to support PATCH requests from forms.
- **Responsive Design**: The application is styled with CSS to be responsive and visually appealing.

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- Method-Override
- HTML/CSS

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/blog-application.git
   cd blog-application
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Run the application**:
   ```sh
   node index.js
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000/home
   ```

## Usage

- **Viewing the blog post**: Visit the home page to see the current blog post.
- **Editing the blog post**:
  1. Click the "Edit" button at the bottom of the home page.
  2. Fill in the new image link, heading, and content in the form.
  3. Click the "Update Post" button to save changes.

## Project Structure

```
.
├── views
│   ├── home.ejs        # Home page template
│   ├── edit.ejs        # Edit page template
├── public
│   ├── style.css       # CSS styles for the home page
│   ├── edit.css        # CSS styles for the edit page
├── index.js            # Main application file
├── package.json        # Node.js package file
└── README.md           # Project README file
```

## Code Overview

### `index.js`

- Sets up the Express server and middleware.
- Defines routes for the home page, edit page, and handling form submissions.
- Uses the `method-override` package to support PATCH requests.

### `home.ejs`

- Displays the current blog post.
- Includes a button to navigate to the edit page.

### `edit.ejs`

- Provides a form to update the blog post content.
- Pre-fills the form with the current blog post data.

### CSS Files

- **`style.css`**: Contains styles for the home page.
- **`edit.css`**: Contains styles for the edit page.

## Contributing

1. **Fork the repository**.
2. **Create a new branch**:
   ```sh
   git checkout -b feature-branch
   ```
3. **Make your changes**.
4. **Commit your changes**:
   ```sh
   git commit -m "Add some feature"
   ```
5. **Push to the branch**:
   ```sh
   git push origin feature-branch
   ```
6. **Open a pull request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
