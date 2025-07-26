import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  addRecipe: (newRecipe) => {
    const updated = [...get().recipes, newRecipe];
    set({ recipes: updated });
    get().filterRecipes(); // Update filtered list
  },

  deleteRecipe: (id) => {
    const updated = get().recipes.filter((recipe) => recipe.id !== id);
    set({ recipes: updated });
    get().filterRecipes();
  },

  updateRecipe: (updatedRecipe) => {
    const updated = get().recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    set({ recipes: updated });
    get().filterRecipes();
  },

  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term }, false);
    get().filterRecipes(); // re-filter after updating term
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },
}));
