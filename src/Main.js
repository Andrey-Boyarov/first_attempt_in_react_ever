import content from './content.json';
import {useState, useEffect} from 'react';

export default function Main() {

    const [listItem, setListItem] = useState([]);

    const [inputContent, setInputContent] = useState('')

    const click = () => console.log('.')

    const deleteItem = id => {
        setListItem(listItem.filter(item => item.id !== id))
    }

    const checkItem = id => {
        setListItem(listItem.map(item => {
            if (item.id === id) item.check = !item.check
        }))
    }

    useEffect(() => {
        const raw = localStorage.getItem('myItems') || [];
        setListItem(JSON.parse(raw));
    }, [])

    useEffect(() => {
        document.addEventListener('click', click)
        localStorage.setItem('myItems', JSON.stringify(listItem))
        return () => {document.removeEventListener('click', click)}
    }, [listItem]);


    return(
            <div>
                {content.map(item => <section><h2>{item.name}</h2><div>{item.body}</div></section>)}
                <input type={'text'}
                       placeholder={'type something'}
                       value={inputContent}
                       onChange={event => setInputContent(event.target.value)}
                       onKeyPress={
                           (event) => {
                               if (event.key === 'Enter') {setListItem([...listItem,
                                   {
                                       id: Date.now(),
                                       label: inputContent,
                                       check: false
                                   }])
                                   setInputContent('');
                               }
                               console.log(listItem);}
                       }
                />
                <ul>
                    {listItem.map(item =>
                        <li>
                            <label>
                                <input type={'checkbox'} defaultChecked={false} onChange={() => checkItem(item.id)}/>
                                <span>{item.label}</span>
                                <button onClick={() => deleteItem(item.id)}>delete</button>
                            </label>
                        </li>)}
                </ul>
            </div>
    );

}