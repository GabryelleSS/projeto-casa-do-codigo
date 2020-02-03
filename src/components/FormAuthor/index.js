import React, { useState } from 'react';
import {
  FormNewAuthors,
  FieldsAddNewAuthors,
  TitleFieldsAddNewAuthors,
  SpanFieldsAddNewAuthors
} from './styles';
import TableButtonRemove from '../AuthorTable';

const FormAuthor = () => {

  const [nameInitial, setNameInitial] = useState('');

  const [bookInital, setBookInitial] = useState('');

  const [priceInitial, setPriceInitial] = useState('');
  
  const takeDataAuthors = (evt) => {
    const { name, value } = evt.target;

    setNameInitial(value);   
  }
  
  const takeDataBooks = (evt) => {
    const { name, value } = evt.target;

    setBookInitial(value);   
  }
  
  const takeDataPrices = (evt) => {
    const { name, value } = evt.target;

    setPriceInitial(value);   
  }

  return (
    <FormNewAuthors>
      <SpanFieldsAddNewAuthors>
        <TitleFieldsAddNewAuthors>Digite o autor:</TitleFieldsAddNewAuthors>
        <FieldsAddNewAuthors value={nameInitial} onChange={takeDataAuthors} />
      </SpanFieldsAddNewAuthors>
      <SpanFieldsAddNewAuthors>
        <TitleFieldsAddNewAuthors>Digite o nome do livro:</TitleFieldsAddNewAuthors>
        <FieldsAddNewAuthors value={bookInital} onChange={takeDataBooks} />
      </SpanFieldsAddNewAuthors>
      <SpanFieldsAddNewAuthors>
        <TitleFieldsAddNewAuthors>Digite o preço:</TitleFieldsAddNewAuthors>
        <FieldsAddNewAuthors value={priceInitial} onChange={takeDataPrices} />
      </SpanFieldsAddNewAuthors>
      <TableButtonRemove
        onClick={}
      >Adicionar
      </TableButtonRemove>
    </FormNewAuthors>
  );
}

export default FormAuthor;