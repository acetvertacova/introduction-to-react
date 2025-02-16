# Lab Work №1: Installation and Configuration of a React Application. Creating the First Components.

## Installation and Project Launch Instructions

### Step 1: Setting up the working environment

1. Download and install the latest or stable version of **Node.js**.

2. Check the installation of **Node.js** and **NPM** by running the following commands in the terminal:

    `node -v`
    
    `npm -v`

### Step 2: Setting up a new React project with Vite.

1. In terminal run the following command: `npm create vite@latest my-app`.

2. Choose:

   **Framework:** React
   **Variant:** JavaScript

3. Navigate to the project folder and start the development server with `npm run dev`.

## Lab's Description

Familiarize yourself with the basics of JSX and create basic React components, including a page header, footer, articles, and an article list, then combine them into a single React application.

## Project Documentation

### Project Structure

<img src="ll_01/public/Screenshot 2025-02-16 at 23.00.07.png">

## Usage Examples

1. **Basic Article Component (Article.jsx):** This is a simple reusable component that displays an article with a title and text. It uses props destructuring to accept title and text parameters.

    ```jsx
    export default function Article({title, text}) {
        return (
            <article>
                <h2>{title}</h2>
                <p>{text}</p>
            </article>
        )
    }
    ```

2. **Article List (ArticleList.jsx):** This component demonstrates static usage of the Article component.

    ```jsx
    import Article from "./Article"
    export default function ArticleList() {

      return(
      <>
          <Article title="Benefits of Morning Exercise" text="Morning workouts boost energy and improve mental focus for the entire day." />
          <Article title="The Future of Remote Work" text="Remote work is becoming permanent as companies see increased productivity and reduced costs." />
          <Article title="Understanding AI" text="AI tools are now essential in daily life, from phones to smart homes." />
          <Article title="Sustainable Living Tips" text="Simple habits like using reusable bags and composting help protect the environment." />
      </>    
      )
    }
    ```
3. **Article Array Component (ArticleArray.jsx):** This component accepts an array of articles as a prop and uses the map method to render each article. Each article in the array should have a title and text property.

    ```jsx
    export default function ArticleArray({articles}) {
    
        return (
          <article>
            {articles.map((article) =>
                <div> 
                    <h2>{article.title}</h2>
                    <p>{article.text}</p>
                </div>
            )}
          </article>
        );
    }
    ```

4. **Article List Using Array (ArticleListArray.jsx):** Instead of creating individual <Article> components, data is stored in an array of objects.

    ```jsx
    import ArticleArray from "./ArticleUsingArray"
    
    export default function ArticleListArray() {
        
        const articles = [
            {
                "title": "Benefits of Morning Exercise",
                "text": "Morning workouts boost energy and improve mental focus for the entire day."
            },
            {
                "title": "The Future of Remote Work",
                "text": "Remote work is becoming permanent as companies see increased productivity and reduced costs."
            },
            {
                "title": "Understanding AI",
                "text": "AI tools are now essential in daily life, from phones to smart homes."
            },
            {
                "title": "Sustainable Living Tips",
                "text": "Simple habits like using reusable bags and composting help protect the environment."
            }
        ]
    
        return(
            <ArticleArray articles={articles} />
        )
    }
    ```
    
## The Control Questions

### What JSX is and what is it used in React for?

JSX (JavaScript XML) is a JavaScript language extension that allows writing HTML-like code inside JavaScript. It is used for describing React user interfaces.

### What are the differences between functional components and class components?

**Class Components** are the traditional way of creating components in React. They are ES6 classes that inherit from React.Component.

*Syntax:*

    ```jsx
    class Welcome extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}</h1>;
        }
    }
    ```

**Functional Components** are the modern way of creating components in React. They are regular functions that accept input data (props) and return JSX markup.

*Syntax:*

    ```jsx
    function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
    }
    ```

> [!WARNING]
> Functional components have replaced class components as a simpler and preferred way of creating components.

### How to pass data to a component through props?

To display the passed data inside the component, the curly braces {} syntax is used.

    ```jsx
    function UserInfo(props) {
      return (
        <div>
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
        </div>
      );
    }
    ```

Properties can be destructured for convenience. This avoids repeatedly accessing the object, such as `props.name` or `props.age`.

    ```jsx
    function UserInfo({name, age}) {
      return (
        <div>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
        </div>
      );
    }
    ```

### In what format are props taken in a functional component?

All properties are passed to the component as a single object, usually called `props`. This means that instead of passing each property separately, such as the `name` or `age` parameter, React combines them into a single object. 

In React, props allow you to pass any type of data into components: strings, numbers, arrays, objects, functions, and even other components. 

> [!IMPORTANT]
> When you pass data types other than strings, you need to use curly braces {} to indicate a JavaScript expression.

## Source List 

[Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)

[Function Components vs Class Components](https://www.freecodecamp.org/news/function-component-vs-class-component-in-react/)

