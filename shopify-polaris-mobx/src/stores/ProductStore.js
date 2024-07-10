import { makeAutoObservable } from "mobx";

class ProductStore {
  title = "";
  price = "";
  stockQuantity = "";
  description = "";
  message = "";
  error = "";

  constructor() {
    makeAutoObservable(this);
  }

  setTitle(value) {
    this.title = value;
  }

  setPrice(value) {
    this.price = value;
  }

  setStockQuantity(value) {
    this.stockQuantity = value;
  }

  setDescription(value) {
    this.description = value;
  }

  setMessage(value) {
    this.message = value;
  }

  setError(value) {
    this.error = value;
  }

  validateForm() {
    if (!this.title || !this.price || !this.stockQuantity || !this.description) {
      this.setError("All fields are required.");
      return false;
    }
    if (isNaN(this.price) || isNaN(this.stockQuantity)) {
      this.setError("Price and Stock Quantity must be numbers.");
      return false;
    }
    this.setError("");
    return true;
  }

  submitForm() {
    if (!this.validateForm()) {
      return;
    }
    // Simulate API call
    setTimeout(() => {
      if (Math.random() > 0.5) {
        this.setMessage("Product created successfully!");
        this.setError("");
      } else {
        this.setError("There was an error creating the product.");
        this.setMessage("");
      }
    }, 1000);
  }
}

export const productStore = new ProductStore();
