import React from "react";
import { observer } from "mobx-react-lite";
import { useLocalObservable } from "mobx-react-lite";
import { Form, FormLayout, TextField, Button, Card, Banner } from "@shopify/polaris";
import { productStore } from "../stores/ProductStore";

const ProductForm = observer(() => {
  const store = useLocalObservable(() => productStore);

  return (
    <Card sectioned>
      <Form onSubmit={() => store.submitForm()}>
        <FormLayout>
          <TextField
            label="Title"
            value={store.title}
            onChange={(value) => store.setTitle(value)}
            autoComplete="off"
          />
          <TextField
            label="Price"
            value={store.price}
            type="number"
            onChange={(value) => store.setPrice(value)}
            autoComplete="off"
          />
          <TextField
            label="Stock Quantity"
            value={store.stockQuantity}
            type="number"
            onChange={(value) => store.setStockQuantity(value)}
            autoComplete="off"
          />
          <TextField
            label="Description"
            value={store.description}
            onChange={(value) => store.setDescription(value)}
            multiline={4}
            autoComplete="off"
          />
          {store.error && <Banner status="critical">{store.error}</Banner>}
          {store.message && <Banner status="success">{store.message}</Banner>}
          <Button submit primary>
            Submit
          </Button>
        </FormLayout>
      </Form>
    </Card>
  );
});

export default ProductForm;
