let input=prompt('What would you like to do?');
const todo=['Brush Teeth','Exercise']
while(input !== 'quit' && input !== 'q')
{
    if(input === 'list')
    {
        console.log('********************')
        for(let i=0;i<todo.length;i++)
        {
            console.log(`${todo[i]}`);
        }
        console.log('********************')
    }
    else if(input === 'new')
    {
        const new_item=prompt("Enter the task you wanna add to the list: ")
        todo.push(new_item);
        console.log(`${new_item}`+' successfully added to the list')
    }
    else if(input === 'delete')
    {
        let del_item=prompt('Enter the item you want to delete: ')
        if(todo.includes(del_item))
        {
            let index=todo.indexOf(del_item)
            // console.log(`${index}`)
            todo.splice(index,1);
            console.log(`${del_item}`+' successfully deleted from the list')
        }
        else
        {
            console.log('The task has not been added to the list yet')
        }
    }
    input=prompt('What would you like to do?')
}
console.log('OK! Quit the app')