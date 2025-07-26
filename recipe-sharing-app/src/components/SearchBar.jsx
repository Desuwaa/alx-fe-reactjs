import { useRecipeStore } from './components/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ padding: '8px', marginBottom: '1rem', width: '100%' }}
    />
  );
};

export default SearchBar;
