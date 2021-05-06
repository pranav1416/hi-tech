//To move between pages


import React from 'react'
//import {Pagination} from "reactstrap";
import {render} from 'react-dom';
import {Pagination, paginationBasic} from "react-bootstrap";

let active = 2;
        let items = [];
        for (let number = 1; number <= 20; number++) {
          items.push(
            <Pagination.Item key={number} active={number === active}>
              {number}
            </Pagination.Item>,
          );
        }


const Pages = () => {
    return (

          <div>
            {
  <Pagination style={{ paddingTop: '300px', paddingLeft: '570px'}}>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
             
            }
           </div>
        );
        render(Pages);
    }
export default Pages
