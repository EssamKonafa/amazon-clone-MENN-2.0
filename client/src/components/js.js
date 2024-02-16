// letral opj
var variable = { name: 'essam', age: 25 }
var variable2 = { name: 'mizo', age: 22 }

//factory function
//لتسهيل بناء واستخدام ال اوبجكت
var course = function (_name, _age) {
    return course
}
var crs = course('essam', 22)

//constructor func
// constructor is a special method in a class or a function that is automatically called when an object is created. It is responsible for initializing the object's properties and setting up any necessary state.
function Person(name, age) {
    this.name = name
    this.age = age
}
var person1 = new Person('essam', 22)

//////////////////////////////shadowing
// Outer scope
var x = 10;

function example() {
    // Inner scope
    var x = 20; // This variable shadows the outer 'x'
    console.log(x); // Output: 20
}

example();

// Accessing the outer 'x' from the outer scope
console.log(x); // Output: 10

var x = 10;

function example() {
    var x = 20;
    console.log(x); // Output: 20
    console.log(window.x); // Accessing the outer 'x' through the global object
}

example();

console.log(x); // Output: 10

/////////////////////////////inner functions
function outerFunction(outerParam) {
    // Outer function scope
    var outerVariable = "I am from outerFunction";

    function innerFunction(innerParam) {
        // Inner function scope
        console.log(outerVariable); // Accessing the outer variable
        console.log(outerParam);    // Accessing the outer parameter
        console.log(innerParam);    // Accessing the inner parameter
    }

    // Invoking the inner function
    innerFunction("I am from innerFunction");
}

// Invoking the outer function
outerFunction("I am from outside");

//////types of inner functions
1 = 'private method'
2 = 'privileged method'

///////prototype
//In JavaScript, every object has a prototype. The prototype is an object from which the current object inherits properties and methods.

//class
//In JavaScript, you can use the class syntax to create classes. Classes provide a more convenient and clear syntax for creating constructor functions and managing prototypes. Here's an example:

class Animal {
    // Constructor method is called when an object is created
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    // Methods can be added directly inside the class
    makeSound() {
        console.log(`${this.name} says ${this.sound}!`);
    }
}

// Creating instances of the Animal class
const dog = new Animal('Dog', 'Woof');
const cat = new Animal('Cat', 'Meow');

// Calling methods on instances
dog.makeSound(); // Output: Dog says Woof!
cat.makeSound(); // Output: Cat says Meow!

//////closure
// Simple Explanation:
// Imagine you have a function (outerFunction) that contains another function (innerFunction). If innerFunction uses a variable from outerFunction, a closure is formed. This allows innerFunction to "remember" and access the variables of outerFunction even after outerFunction has completed its execution.

function multiplier(x) {
    // Outer function sets the first multiplier
    return function (y) {
        // Inner function uses the first multiplier and multiplies it by the second multiplier
        return x * y;
    };
}

// Creating a closure by calling multiplier and assigning the result to a variable
const multiplyByFive = multiplier(5);

// Using the closure to multiply by 5
console.log(multiplyByFive(3)); // Output: 15
console.log(multiplyByFive(8)); // Output: 40

//////////////////////////prototype chaining
// Prototype chaining in JavaScript is a mechanism by which objects inherit properties and methods from other objects through a chain of prototypes. Every object in JavaScript has an associated prototype, and these prototypes are linked together to form a chain. When you access a property or method on an object, JavaScript looks for it not only in the object itself but also in its prototype chain.

/////binding
const button = document.getElementById('myButton');

button.addEventListener('click', function () {
    console.log('Button clicked!');
});
// Here, the function is "bound" to the click event of the button.

// Each of these concepts involves the idea of establishing a connection or association between different elements in JavaScript, whether it's linking a function to an object, associating a variable with a value, or binding an event handler to an element.

///////////////inheritance
// In JavaScript, inheritance is achieved through prototype-based inheritance. Objects can inherit properties and methods from other objects, forming a prototype chain. You can create constructor functions or use the class syntax to define blueprints for objects. Methods are added to the prototype of constructors, and child objects inherit from the prototype of their parent objects.

//Functional programming

// Functional programming (FP) is a programming paradigm that emphasizes the use of pure functions, immutability, and the application of mathematical functions to solve problems. Key concepts include pure functions, immutability, first-class and higher-order functions, referential transparency, function composition, and a declarative programming style. FP avoids mutable state and side effects, promoting a more modular, predictable, and maintainable code structure. Prominent functional programming languages include Haskell, Lisp, Clojure, and JavaScript.


//oop
// Object-Oriented Programming (OOP) encompasses several key concepts that help structure and organize code. Here are some fundamental OOP concepts:

// Class:

// A class is a blueprint for creating objects. It defines properties (attributes) and methods (functions) that the objects created from the class will have.
// Object:

// An object is an instance of a class. It is a self-contained unit that encapsulates properties and methods.
// Encapsulation:

// Encapsulation is the bundling of data (properties) and the methods that operate on that data into a single unit (object). It helps hide the internal state of an object and only exposes what is necessary.
// Abstraction:

// Abstraction involves simplifying complex systems by modeling classes based on the essential properties and behaviors they share. It allows developers to focus on relevant details and ignore unnecessary complexities.
// Inheritance:

// Inheritance allows a class (subclass/derived class) to inherit properties and methods from another class (superclass/base class). It promotes code reuse and establishes a hierarchy of classes.
// Polymorphism:

// Polymorphism allows objects of different types to be treated as objects of a common type. It enables a single interface to represent different types of objects, making code more flexible and extensible.


class Animal {
    makeSound() {
        console.log("Some generic sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}

const myAnimal = new Animal();
const myDog = new Dog();

myAnimal.makeSound(); // Output: Some generic sound
myDog.makeSound();    // Output: Woof! Woof!
// Composition:

// Composition involves creating objects by combining simpler objects. It allows building complex objects by assembling smaller, reusable components.
// Association:

// Association represents the relationship between classes or objects. It can be one-to-one, one-to-many, or many-to-many. Associations help model connections between different parts of a system.

// Object - Oriented Programming(OOP) is a programming paradigm that utilizes the concept of "objects" to organize code.JavaScript supports object - oriented programming, and you can use several OOP principles in your JavaScript code.Here are some key concepts related to OOP in JavaScript:

// Objects:

// In JavaScript, objects are key to implementing OOP.Objects can contain properties and methods.


const person = {
    name: "John",
    age: 30,
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.sayHello(); // Output: Hello, my name is John
// Constructor Functions:

// Constructor functions are used to create instances of objects.They act as blueprints for creating objects with similar properties and methods.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("John", 30);
person1.sayHello(); // Output: Hello, my name is John

// Prototypes:

// Prototypes are a way to share properties and methods among all instances of a constructor function. The prototype property is part of the prototype chain.
//     Inheritance:

// Inheritance allows one object to inherit properties and methods from another object.This can be achieved using the prototype chain or the class syntax introduced in ECMAScript 2015(ES6).


class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Some generic sound");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");
    }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); // Output: Some generic sound
myDog.bark();      // Output: Woof! Woof!

// Encapsulation:

// Encapsulation involves bundling data(properties) and the methods that operate on that data into a single unit, i.e., an object.It helps in hiding the internal state of an object.
//     Polymorphism:

// Polymorphism allows objects of different types to be treated as objects of a common type.In JavaScript, this often involves functions that can operate on objects of different types.


function greeting(person) {
    console.log(`Hello, ${person.name}!`);
}
const john = { name: "John" };
const jane = { name: "Jane" };

greeting(john); // Output: Hello, John!
greeting(jane); // Output: Hello, Jane!
// JavaScript supports both classical and prototypal approaches to OOP, giving developers flexibility in how they structure and organize their code.The introduction of the class syntax in ES6 made it easier to work with OOP concepts in a more familiar way for developers coming from other languages.

//promise

// a promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. It is a way to handle asynchronous code more elegantly and avoid callback hell. Promises have three states: pending, fulfilled, or rejected.
//Promises are a powerful and flexible mechanism for handling asynchronous operations 

const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
        const success = true;

        if (success) {
            resolve("Operation completed successfully");
        } else {
            reject("Operation failed");
        }
    }, 1000);
});

// Handling the promise
myPromise
    .then((result) => {
        console.log(result); // Output: Operation completed successfully
    })
    .catch((error) => {
        console.error(error); // Output: Operation failed
    });

//   In this example, the promise is resolved after a simulated asynchronous operation.The then method is used to handle the successful completion of the promise, and the catch method is used to handle any errors

//high order function

// a higher-order function is a function that takes one or more functions as arguments or returns a function as its result. This concept is derived from functional programming principles and is a powerful way to write more concise and modular code. Higher-order functions enable the creation of abstractions and can make code more flexible and reusable.

//1Functions that take a function as an argument:

// Example: Array's map function
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (num) {
    return num * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8, 10]

//2Functions that return a function:

// Example: Function returning a function
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
//Here, the multiplier function returns another function. The returned function can then be invoked with a value to perform a multiplication.

//3Functions as parameters for abstraction:

// Example: Custom higher-order function for abstraction
function operationOnArray(arr, operation) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(operation(arr[i]));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = operationOnArray(numbers, function (num) {
    return num * num;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
//This example demonstrates a custom higher-order function that abstracts the process of applying an operation to each element of an array.

//pseduo classes
// In CSS, pseudo-classes are used to select and style elements based on their state or position in the document tree. Pseudo-classes are denoted by a single colon (:) followed by the name of the pseudo-class.

//1: hover - Selects and styles an element when the mouse is over it:

a:hover {
    color: red;
}
//: active - Selects and styles an element when it is being activated(clicked):

button:active {
    background - color: #00ff00;
}
: focus - Selects and styles an element when it has focus(e.g., when clicked or tabbed into):

input:focus {
    border: 2px solid blue;
}

//pseduo elements
// pseudo-elements are used to style a specific part of an element. Pseudo-elements are denoted by two colons (::) followed by the name of the pseudo-element. Common pseudo-elements include ::before and ::after, which allow you to insert content before or after an element's actual content.

// ::before - Inserts content before the actual content of an element:

p::before {
  content: "Opening quote: ";
  font-style: italic;
}
// ::after - Inserts content after the actual content of an element:

p::after {
  content: " - The End";
  font-weight: bold;
}

p::first-line {
  text-transform: uppercase;
}

//react hooks
// React Hooks are functions that enable functional components to use state and lifecycle features in React. 
useState Hook:

jsx
Copy code
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
useEffect Hook:

jsx
Copy code
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data or perform side effects
    // This function will run after every render (including the initial render)
    fetchData();
  }, []); // Empty dependency array means it runs once after the initial render

  return (
    <div>
      {data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
useContext Hook:

jsx
Copy code
import React, { useContext } from 'react';
import MyContext from './MyContext';

function ExampleComponent() {
  const contextValue = useContext(MyContext);

  return <p>{contextValue}</p>;
}
useReducer Hook:


import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
    </div>
  );
}

//////////////////////
🎯🔖

ال for و forEach و map هي أساليب مختلفة في لغة البرمجة JavaScript تستخدم للتعامل مع العناصر في مصفوفة Array


1- for loop :
 - يعتبر تقنية تكرار تقليدية.
 - يستخدم لتنفيذ كود بشكل مكرر حتى تتحقق شرط الوقف
 - يمكن التحكم الكامل في عملية التكرار

 مثال:
 for (let i = 0; i < array.length; i++) {
 // تنفيذ الكود هنا
 }
 


2 - forEach :
 - يتيح لك تنفيذ وظيفة معينة لكل عنصر في المصفوفة
 - لا يعود بقيمة void
 - يجعل الكود أقل تعقيدًا بالمقارنة مع for loop

 مثال:
 array.forEach(function(element) {
 // تنفيذ الكود هنا
 });
 


3 - map :
 - يقوم بإنشاء مصفوفة جديدة باستخدام نتائج تنفيذ وظيفة معينة على كل عنصر في المصفوفة الأصلية.
 - يعود بمصفوفة جديدة.
 - يستخدم عندما تحتاج إلى إنشاء مصفوفة جديدة بناءً على المصفوفة الحالية دون تغيير المصفوفة الأصلية

 مثال:
 const newArray = array.map(function(element) {
 // قيام بعمل ما وإعادة القيمة لتكوين المصفوفة الجديدة
 return modifiedElement;
 });
 


بشكل عام:
- استخدم for إذا كنت بحاجة إلى تحكم كامل في عملية التكرار
- استخدمو forEach إذا كنت ترغب في تنفيذ وظيفة لكل عنصر دون الحاجة إلى مصفوفة جديدة
- استخدم map إذا كنت بحاجة إلى إنشاء مصفوفة جديدة باستناد إلى المصفوفة الحالية

//////////////////react road map

------------------------
Class Components
Functional Components
Stateless Components
Higher-Order Components (HOC)
Virtual DOM
------------------------
JSX
------------------------
JSX Syntax
JSX Expressions
JSX Fragments
------------------------
State Management
------------------------
Props
Local Component State
React Context API
Redux
------------------------
React Hooks
------------------------
useState
useEffect
useContext
useRef
useCallback
useMemo
useReducer
Custom Hooks
------------------------
React Router
------------------------
Route Configuration
Route Parameters
Nested Routes
Router Hooks
------------------------
React Context
------------------------
Creating Context
Consuming Context
Context Providers
------------------------
React Forms
------------------------
Controlled Components
Uncontrolled Components
Form Validation
Form Handling
------------------------
React Lifecycle Methods
------------------------
ComponentDidMount
ComponentDidUpdate
ComponentWillUnmount
ComponentDidCatch
------------------------
React Events
------------------------
Synthetic Events
Event Handling
Event Bubbling
Event Delegation
------------------------
React Testing
------------------------
Unit Testing
Integration Testing
Component Testing
Testing Frameworks

///////////////////////////////////////////////////undefined null
undefined is automatically assigned by JavaScript to variables that are not initialized or function parameters that are not provided.
null is explicitly assigned to indicate the absence of a meaningful value.
Usage:

Use undefined when a variable is expected to have a value but is not assigned.
Use null when you want to explicitly represent the absence of a value.

/////////////////////difrrence between call apply and bind
// call and apply immediately invoke the function, while bind returns a new function that needs to be invoked separately.

/////////////////////promises vs observable
// Use promises when dealing with a single asynchronous operation with a one-time result.
// Use observables when working with streams of data over time, especially in scenarios like event handling, continuous updates, or complex asynchronous workflows.