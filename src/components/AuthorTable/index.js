import React, { useState, setState } from 'react';
import FormAuthor from '../FormAuthor';
import { 
  TableContainer,
  TableHead,
  TableBody,
  TableTr,
  TableTh,
  TableTd,
  TableButtonRemove
} from './styles';

export const AuthorTable = () => {

  const [authors, setAuthors] = useState(
    [
      {
        id: 1,
        name: 'Paulo',
        book: 'React',
        price: '1000'
      },
      {
        id: 2,
        name: 'Daniel',
        book: 'Java',
        price: '99'
      },
      {
        id: 3,
        name: 'Marcos',
        book: 'Design',
        price: '150'
      },
      {
        id: 4,
        name: 'Bruno',
        book: 'DevOps',
        price: '100'
      },
      {
        id: 5,
        name: 'Marcela',
        book: 'Front-end',
        price: '220'
      }
    ]
  );
  
  function registerDataAuthors(author) {

    setState({ 
      authors: [
        ...authors, 
        author
      ] 
    });
  }

  function removeAuthor(index) {

    setAuthors(
      authors.filter((author, currentPosition) => {
        return currentPosition !== index;
      })
    )
  }

  return (
    <>
      <TableContainer>
        <TableHead>
          <TableTr>
            <TableTh>Autores</TableTh>
            <TableTh>Livros</TableTh>
            <TableTh>Preços</TableTh>
            <TableTh>Remover</TableTh>
          </TableTr>
        </TableHead>
        <TableBody>
        {authors.map((author, index) => {
          return (
            <TableTr key={index}>
              <TableTd>{author.name}</TableTd>
              <TableTd>{author.book}</TableTd>
              <TableTd>{author.price}</TableTd>
              <TableTd>
                <TableButtonRemove 
                  onClick={() => removeAuthor(index)}
                >Remover
                </TableButtonRemove>
              </TableTd>
            </TableTr>
          )
        })}
        </TableBody>
      </TableContainer>
      <FormAuthor />
    </>
  );
};

export default AuthorTable;