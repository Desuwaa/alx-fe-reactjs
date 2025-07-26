import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
