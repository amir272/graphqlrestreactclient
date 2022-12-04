import React from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Components/Product";
import Manufacturer from "./Components/Manufacturer";
import AddProduct from "./Components/AddProduct";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import PageNotFound from "./Components/PageNotFound";
function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:8092/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
  <   BrowserRouter>
        <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/addprod"  element={<Nav />}>
          <Route index element={<AddProduct/>}/>
          <Route path="product" element={<Product />} />
          <Route path="manufacture" element={<Manufacturer />} />
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
        
      </Routes>
    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
