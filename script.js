// script.js
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Initialize expenses array from MongoDB
let expenses;

// Function to connect to MongoDB and fetch expenses
async function connectToMongoDB() {
  try {
    // Connect to the MongoDB client
    await client.connect();

    // Select the database and collection
    const database = client.db('expenseTracker');
    const collection = database.collection('expenses');

    // Fetch all documents from the collection
    expenses = await collection.find({}).toArray();

    // Render expenses
    renderExpenses();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

// Function to render expenses in tabular form
function renderExpenses() {
  // ... (remaining code remains the same)
}

// Function to add expense
async function addExpense(event) {
  event.preventDefault();

  // ... (remaining code remains the same)

  // Insert the new expense into MongoDB
  try {
    const database = client.db('expenseTracker');
    const collection = database.collection('expenses');
    await collection.insertOne(expense);
  } catch (error) {
    console.error('Error adding expense to MongoDB:', error.message);
  }

  // Fetch updated expenses from MongoDB
  expenses = await collection.find({}).toArray();

  // Render expenses
  renderExpenses();
}

// Function to delete expense
async function deleteExpense(event) {
  if (event.target.classList.contains('delete-btn')) {
    // ... (remaining code remains the same)

    // Delete the expense from MongoDB
    try {
      await collection.deleteOne({ _id: expenses[expenseIndex]._id });
    } catch (error) {
      console.error('Error deleting expense from MongoDB:', error.message);
    }

    // Fetch updated expenses from MongoDB
    expenses = await collection.find({}).toArray();

    // Render expenses
    renderExpenses();
  }
}

// Add event listeners
expenseForm.addEventListener('submit', addExpense);
expenseList.addEventListener('click', deleteExpense);

// Connect to MongoDB and fetch initial expenses on page load
connectToMongoDB();