import React from 'react';
import Item from './Item/Item'

const items = (props) => props.items?.map((item, index) => {
    return <Item
        click={() => props.clicked(index)}
        name={item.name}
        checked={item.done}
        key={item.id}
        changed={(event) => props.changed(event, item.id)}></Item>
});

export default items