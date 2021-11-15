import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {   Suspense } from 'react';  
import App  from "./App" 
import 'bootstrap/dist/css/bootstrap.css';
import Loading from './components/Loading/Loading' 
const rootElement = document.getElementById("root");
 ReactDOM.render(
   <BrowserRouter> 
   <Suspense fallback={<Loading />}>
      <Switch> 
        <Route path="/" component={App} />   
      </Switch> 
    </Suspense>
   </BrowserRouter>,
   rootElement
 );
