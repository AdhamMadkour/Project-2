import "./App.css";
import CardList from "./component/CardList";
import CourseCard from "./component/CourseCard";
const title = "Expand your career opportunities with Python";
const description =
  "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.";
const courses = [
  {
    id: 1,
    title: "Learn Python: The Complete Python Programming Course",
    author: "Avinash Jain,The Codex",
    image: "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
    price: "679.99",
    old_price: "2999",
    rating: 5,
    category: "Python",
  },
  {
    id: 2,
    title: "Learning Python for Data Analysis and Visualization",
    author: "Jose Portilla",
    image: "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg",
    price: "1,599.99",
    old_price: "2999",
    rating: 3,
    category: "Python",
  },
  {
    id: 3,
    title: "Python for Beginners - Learn Programming from scratch",
    author: "Edwin Diaz, Coding FAcutly Solutaions",
    image: "https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg",
    price: "679.99",
    old_price: "2999",
    rating: 2,
    category: "Python",
  },
  {
    id: 4,
    title: "Learn Python: Python for Beginners",
    author: "Abrar Hussain",
    image: "https://img-c.udemycdn.com/course/240x135/426570_1b91_3.jpg",
    price: "319.99",
    old_price: "2999",
    rating: 5,
    category: "Python",
  },
  {
    id: 5,
    title: "Python Beyond the Basics - Object-Oriented Programming",
    author: "Infinite Skills",
    image: "https://img-c.udemycdn.com/course/480x270/449532_2aa9_7.jpg",
    price: "519.99",
    old_price: "2999",
    rating: 4,
    category: "Python",
  },
  {
    id: 6,
    title: "Python From Scratch Selenium WebDriver QA Automation 2022",
    author: "Admas Kinfu",
    image: "https://img-c.udemycdn.com/course/480x270/482754_7146_6.jpg",
    price: "1,299.99",
    old_price: "2999",
    rating: 3,
    category: "Python",
  },
  {
    id: 7,
    title: "Teach Your Kids to Code: Learn to Program Python at Any Age!",
    author: "Bryson Payne",
    image: "https://img-c.udemycdn.com/course/480x270/519554_da68_6.jpg",
    price: "319.99",
    old_price: "2999",
    rating: 2,
    category: "Python",
  },
  {
    id: 8,
    title: "Python for Data Structures, Algorithms, and Interviews!",
    author: "Jose Portilla",
    image: "https://img-c.udemycdn.com/course/480x270/535622_3bc0.jpg",
    price: "1,299.99",
    old_price: "2999",
    rating: 4,
    category: "Python",
  },
  {
    id: 9,
    title: "Automate the Boring Stuff with Python Programming",
    author: "Al Sweigart",
    image: "https://img-c.udemycdn.com/course/480x270/543600_64d1_4.jpg",
    price: "519.99",
    old_price: "2999",
    rating: 1,
    category: "Python",
  },
  {
    id: 10,
    title: "Python Bootcamp From Zero to Hero in Python",
    author: "Jose Portilla",
    image: "https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg",
    price: "729.99",
    old_price: "2999",
    rating: 4,
    category: "Python",
  },
];
const sample = {
  id: 1,
  title: "Learn Python: The Complete Python Programming Course",
  author: "Avinash Jain,The Codex",
  image: "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
  price: "679.99",
  old_price: "2999",
  rating: 5,
  category: "Python",
};
function App() {
  return (
    <div className="App">
      <CardList
        title={title}
        description={description}
        sample={courses}
      ></CardList>
    </div>
  );
}

export default App;
