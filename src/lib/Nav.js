import React from 'react';
import MainView from '../views/MainView';
import FormView from '../views/FormView';

export function chooseView(view, functionMain, functionForm){
  let viewComponent = view === 'main' ? <MainView changeView={functionForm}/> : <FormView changeView={functionMain}/>;
  return viewComponent;
}
